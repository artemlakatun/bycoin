import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";

export const metadata = {
  title: "ByCoin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
