import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Your Name</Link>
        <div className="space-x-4">
          <Link href="#about" className="text-white hover:text-gray-300">About</Link>
          <Link href="#projects" className="text-white hover:text-gray-300">Projects</Link>
          <Link href="#contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}