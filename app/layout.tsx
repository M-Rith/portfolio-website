import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Huot Monirith",
  description: "Huot Monirith Portfolio",
};

export default function RootLayout({
  breadcrumb,
  children,
}: Readonly<{
  breadcrumb: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ubuntu.variable} antialiased section bg-[#FOEBE3] `}>
        {breadcrumb}
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
