import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google"
const sora = Sora({ subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="h-screen flex justify-center items-center">{children}</main>
      </body>
    </html>
  );
}
