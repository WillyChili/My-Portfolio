import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio — Tu Nombre",
  description: "Diseñador y desarrollador apasionado por crear experiencias digitales memorables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
