import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Social Media App",
  description: "Social Media App used to showcase a CRUD app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="my-10 text-center">Social Media</header>

        <main>
          <Providers>
          {children}
          </Providers>
          </main>

        <footer className="my-10 text-center">&copy; CodeX Academy</footer> 
      </body>
    </html>
  );
};
