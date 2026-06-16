import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "StackStories",
  description: "A community for stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={geist.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}