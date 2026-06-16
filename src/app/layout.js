import "./globals.css";

// import AuthProvider from "@/context/AuthContext";
import AuthProvider from "@/providers/AuthProvider";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

import {
  Toaster,
} from "react-hot-toast";

export const metadata = {
  title: "StackStories",
  description:
    "Discover stories that matter",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
          />
        </AuthProvider>
      </body>
    </html>
  );
}