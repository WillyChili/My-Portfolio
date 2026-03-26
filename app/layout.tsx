import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Tu Nombre",
  description: "Diseñador y desarrollador apasionado por crear experiencias digitales memorables.",
  keywords: ["portfolio", "desarrollador", "diseño web", "frontend"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Portfolio — Tu Nombre",
    description: "Diseñador y desarrollador apasionado por crear experiencias digitales memorables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  );
}
