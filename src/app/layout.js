"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainHeader from "./components/mainHeader";
import Footer from "./components/footer";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect, useRef } from "react";
import { metadata } from "./metadata"; // Import the metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value as needed
      }
    );

    const currentFooterRef = footerRef.current; // Copy footerRef.current to a variable
    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        // Use the copied variable in the cleanup
        observer.unobserve(currentFooterRef);
      }
    };
  }, [footerRef]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        {!isFooterVisible && <MainHeader />}
        {children}
        <div ref={footerRef}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
