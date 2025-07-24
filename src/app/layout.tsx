"use client";

import { useState, useEffect } from "react";
import MainHeader from "@/views/components/Molecules/MainHeader";
import MainFooter from "@/views/components/Molecules/MainFooter";
import LoadingScreen from "@/views/components/Organisms/LoadingScreen";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="ja">
      <body>
        {isMounted && isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
        <div
          style={{
            opacity: !isMounted || isLoading ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <MainHeader />
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
