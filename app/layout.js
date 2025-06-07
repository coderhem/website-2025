import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Outfit, Lato } from 'next/font/google';

const exo2 = Outfit({ subsets: ['latin'], variable: '--font-exo2', weight: ['600', '700', '800'] });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['400', '700'] });
const oswald = Lato({ subsets: ['latin'], variable: '--font-oswald', weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${lato.variable} ${oswald.variable}`}>
      <body cz-shortcut-listen="true" className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
