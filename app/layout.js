import { Inter } from "next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./style/globals.css";

export const metadata = {
  title: "ByCoin",
};

const inter = Inter({
    weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
