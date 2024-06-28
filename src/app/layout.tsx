import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Condensed({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Ibrahim.dev",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        {/* <footer>footer</footer> */}
        {children}
        {/* <footer>footer</footer> */}
        </body>
    </html>
  );
}
