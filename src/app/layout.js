import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Navbar";


const Bahn = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-bahn",
  weight: "100 900",
});

export const metadata = {
  title: "Predialnet",
  description: "Sua nova internet",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-BR"
    className={`${Bahn.variable} antialiased scroll-smooth`}>
      <body className="bg-[#fff] tracking-tight">
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P64P89"
height="0" width="0"></iframe>
      <Nav />
        {children}
      </body>
    </html>
  );
}
