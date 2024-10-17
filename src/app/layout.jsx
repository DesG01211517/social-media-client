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
  // return (
  //   <html lang="en">
  //     <body
  //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //     >
  //       <header className="my-10 text-center">Flash</header>

  //       <main>
  //         <Providers>{children}</Providers>
  //       </main>

  //       <footer className="my-10 text-center">&copy; CodeX Academy</footer>
  //     </body>
  //   </html>
  // );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-between`}
      >
        <header className="my-10 text-center">
          <h1 className="text-6xl font-bold text-yellow-400 animate-pulse">
            Flash
          </h1>
        </header>

        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>

        <footer className="text-center py-4 bg-gray-800 text-gray-400 w-full">
          &copy; CodeX Academy
        </footer>
      </body>
    </html>
  );
}
