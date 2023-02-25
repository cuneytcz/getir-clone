import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/style.css";

export default function RootLayout({ children }) {
     return (
          <html lang="tr">
               <body>
                    <Header />
                    <main>{children}</main>
                    <Footer />
               </body>
          </html>
     );
}
