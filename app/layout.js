import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "@/public/images/Metadata/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My space",
  description:
    "This is Frank's portfolio and space to express myself through code",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
