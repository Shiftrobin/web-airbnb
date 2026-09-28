import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";
import SearchModal from "./components/modals/SearchModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "airbnb",
  description: "Airbnb clone built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  const content = (
      <p>yo</p>
    );
  

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <div className="pt-32">
            {children}
        </div>   

        {/* <Modal label='Modal Test' content={content} isOpen={false} /> */}

        <LoginModal />
        <SignupModal />
        <AddPropertyModal />
        <SearchModal />
        

        </body>
    </html>
  );
}
