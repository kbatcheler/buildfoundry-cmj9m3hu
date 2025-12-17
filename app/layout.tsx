import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chatbot E2E Test',
  description: 'AI-powered chatbot integration template with Render deployment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}