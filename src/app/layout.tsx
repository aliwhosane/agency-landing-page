import "./globals.css";
import Header from "./Header";
import { Footer } from "@/components";

export const metadata = {
  title: "Tape A Tale",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
