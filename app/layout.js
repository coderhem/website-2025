import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Outfit, Lato } from 'next/font/google';

const exo2 = Outfit({ subsets: ['latin'], variable: '--font-exo2', weight: ['600', '700', '800'] });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${lato.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
