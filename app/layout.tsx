import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "AI Pow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}>
      <html lang="hu">
      <body className={`${inter.className} bg-black text-white antialiased`}>
            {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
