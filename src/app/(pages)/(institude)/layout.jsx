import "@/css/globals.css"; 
import Header from "./components/InstitudeHeader";
import FooterSection from "../softwarehouse/components/Footer";


export default function RootLayout({children}){
  

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
