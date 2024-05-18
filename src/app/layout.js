import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "Find the best products at the best prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className="bg-blue-200">
          <Header />
          <main className="pt-20">
            {" "}
            {/* Adjust the padding-top value according to your header height */}
            {children}
          </main>{" "}
          <Footer />
          <Toaster />
        </body>
      </ReduxProvider>
    </html>
  );
}
