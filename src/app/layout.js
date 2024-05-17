import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "Find the best products at the best prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
