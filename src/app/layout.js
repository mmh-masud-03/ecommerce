import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "react-hot-toast";
import SmallHeader from "@/components/SmallHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gadget Hub",
  description: "Find the best products at the best prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <ReduxProvider>
        <body className="bg-blue-200">
          <Header />
          <SmallHeader />
          <main className="pt-14 md:pt-20">
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
