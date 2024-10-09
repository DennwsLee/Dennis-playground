import Link from 'next/link';

const MenuBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50">
      <ul className="flex justify-center space-x-6 py-4">
        <li><Link href="#" className="text-blue-400 hover:text-blue-300">Home</Link></li>
        <li><Link href="#" className="text-blue-400 hover:text-blue-300">About</Link></li>
        <li><Link href="#" className="text-blue-400 hover:text-blue-300">Projects</Link></li>
        <li><Link href="#" className="text-blue-400 hover:text-blue-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;