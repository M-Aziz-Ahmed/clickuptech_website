import "@/css/globals.css"; 
import Header from "./components/Header";
import FooterSection from "../(institude)/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
      <Header/>
      { children}
      <FooterSection/>
    </body>
  </html>
  );
} 
