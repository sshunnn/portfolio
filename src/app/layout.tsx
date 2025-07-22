import MainHeader from "@/views/components/Molecules/MainHeader";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
