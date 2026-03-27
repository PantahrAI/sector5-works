import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sector-5 Works | Local Services in Vasundhara",
  description: "Expert home services delivered by verified local professionals. Dry cleaning, car wash, ironing, and more in Sector 5, Vasundhara.",
  keywords: "home services, Vasundhara, Sector 5, dry cleaning, car wash, local business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-full">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}