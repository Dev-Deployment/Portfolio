import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Chukwude Ogbogu</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="#about" className="hover:text-blue-400">About</Link>
        <Link href="#projects" className="hover:text-blue-400">Projects</Link>
        <Link href="#certifications" className="hover:text-blue-400">Certifications</Link>
        <Link href="#contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
