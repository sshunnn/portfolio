import MainHeader from "@/views/components/Molecules/MainHeader";
import MainFooter from "@/views/components/Molecules/MainFooter";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MainHeader/>
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}