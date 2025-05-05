import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./style/globals.css";

export const metadata = {
  title: "ByCoin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
