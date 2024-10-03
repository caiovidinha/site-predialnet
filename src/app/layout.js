import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Navbar";
import SecNav from "@/components/SecNavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const Bahn = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-bahn",
  weight: "100 900",
});

export const metadata = {
  title: "Predialnet",
  description: "Brilhe com a sua nova internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR"
    className={`${Bahn.variable} antialiased`}>
      <body className="bg-[#f2f2f2]">
      <Nav />
      <SecNav />
        {children}
      </body>
    </html>
  );
}
