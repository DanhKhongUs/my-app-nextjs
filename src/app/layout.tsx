import "./globals.css";
import "@/lib/fontawesome";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import ContactCircleBtnWrap from "@/components/ContactCircleBtn/ContactCircleBtnWrap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Header />
        <Providers>{children}</Providers>
        <ContactCircleBtnWrap />
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
