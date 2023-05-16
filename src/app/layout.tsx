import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fillin - Natural Grape Concentrate",
  description:
    "Enjoy the finest grape juice concentrate from Australia, made with 100% natural grapes from the best wine regions in the country.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
