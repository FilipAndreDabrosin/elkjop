import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Siden ble ikke funnet</h1>
      <p className="mb-8">Beklager, vi finner ikke siden du leter etter.</p>
      <Link
        href="/"
        className="text-gray-50 rounded-lg px-6 py-3 bg-[#6AA334] hover:bg-[#5d902d] transition duration-300 font-semibold"
      >
        Tilbake til hovedsiden
      </Link>
    </div>
  );
}
