import "@/css/globals.css"; 
import Header from "./components/InstitudeHeader";
import FooterSection from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function RootLayout({children}){
  

  return (
    <html lang="en">
    <body className="font-[poppins]">
      <Header/>
      { children}
      <FooterSection/>
    </body>
  </html>
  );
} 
