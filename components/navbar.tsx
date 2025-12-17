import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow dark:bg-gray-800 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800 dark:text-gray-100">Chatbot E2E Test</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/about">
            <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}