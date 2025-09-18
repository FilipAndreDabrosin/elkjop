"use client";

/*
Carten fungerer ved at når en bruker legger til et produkt i handlekurven, 
så blir den lagt til i en global variabel som er en array av CartItem objekter (som er produktet + antall).
Så gjøres CartItem om til JSON og lagres i localStorage.  
Den laster fra localStorage når useEffect kjører, som sjekker om det er noe i den globale cart-arrayen.  
Når carten oppdateres, så kalles notifyAllComponents som kjører alle funksjonene i cartListeners arrayen, som er useState setter-funksjonene til alle komponenter som bruker useCart hooken.
 
*/

import { useState, useEffect } from "react";
// Gjenbruker produtket typen
import { Product } from "../types/Product";

// Denne er for å representere et produkt i handlekurven, men den holder også styr på antall produkter
type CartItem = Product & {
  quantity: number;
};

let globalCartItems: CartItem[] = [];
let cartListeners: Array<(items: CartItem[]) => void> = [];

const notifyAllComponents = () => {
  cartListeners.forEach((listener) => listener([...globalCartItems]));
};
// Laster fra cart itemen
const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("cart");
    if (saved) {
      globalCartItems = JSON.parse(saved);
    }
  } catch (error) {}
};
// Lagrer til cart itemen
const saveToLocalStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
  }
};

// 
export function useCart() {
  // 
  const [cartItems, setCartItems] = useState<CartItem[]>(globalCartItems);
  const [isLoading, setIsLoading] = useState(true);

  // 
  useEffect(() => {
    // Hvis carten er tom, så vil den prøve å laste fra localStorage
    if (globalCartItems.length === 0) {
      loadFromLocalStorage();
    }

    // Denne vil sette cartItems til det som er i globalCartItems arrayen.
    setCartItems(globalCartItems);
    setIsLoading(false);

    // Legger til itemen i en liste over listeners. Blir brukt i notifyAllComponents funksjonen.
    cartListeners.push(setCartItems);

    //
    return () => {
      cartListeners = cartListeners.filter(
        (listener) => listener !== setCartItems
      );
    };
  }, []);

  
  const addToCart = (product: Product) => {
    
    const existingItem = globalCartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Hvis produktet allerede er lagt til i carten, så vil den øke mengden, og ikke legge det til som et nytt produkt
      globalCartItems = globalCartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Hvis produktet ikke finnes i carten vil den legge den til med en mengde på 1
      globalCartItems = [...globalCartItems, { ...product, quantity: 1 }];
    }

    // Lagrer som en JSON strin i localstorage
    saveToLocalStorage(globalCartItems);

    // Forteller componentene som bruker carten at noe har endret seg, fra listener
    notifyAllComponents();
  };

  // 
  const removeFromCart = (productId: number) => {
    globalCartItems = globalCartItems.filter((item) => item.id !== productId);
    saveToLocalStorage(globalCartItems);
    notifyAllComponents();
  };

  //
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      // 
      removeFromCart(productId);
    } else {
      // 
      globalCartItems = globalCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      saveToLocalStorage(globalCartItems);
      notifyAllComponents();
    }
  };

  // Teller totalt antall produkter i cart
  const getTotalItems = () => {
    return globalCartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // 
  const getTotalPrice = () => {
    const total = globalCartItems.reduce((sum, item) => {
      // Gjør om prisen fra en string til et tall. Finner alt som ikke er et tall globalt, og fjerner det med en tom string.
      // Så setter den summen til prisen * antall
      const price = parseFloat(item.price.replace(/[^0-9]/g, ""));
      return sum + price * item.quantity;
    }, 0);
    return `${total.toLocaleString()},-`;
  };

  // Returner alle funksjonene og variablene componentene bruker for å ha en fungerende cart
  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    isLoading,
  };
}
