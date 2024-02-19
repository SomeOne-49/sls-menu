import Navbar from "@/components/ui/navs/navbar";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  wight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "SLS Menu",
  description: "Generated by VegaSDS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="light" className={`${cairo.className} min-h-screen`}>
        <div id="overlays"></div>
        <Navbar />
        <main className="container mx-auto px-2">{children}</main>
      </body>
    </html>
  );
}