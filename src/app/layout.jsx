import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Abanoub Portfolio",
  description:
    "A Front-End Developer's portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8`}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex flex-col flex-grow">{children}</main>
      </body>
    </html>
  );
}
