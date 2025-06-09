import { Noto_Sans } from "next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./style/globals.css";

export const metadata = {
  title: "ByCoin",
};

const inter = Noto_Sans({
    weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
