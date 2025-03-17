import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Created with Next.js, React Query and Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex gap-4">
              <Link href="/" className="hover:text-gray-300">
                Главная
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                О нас
              </Link>
            </div>
          </nav>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
