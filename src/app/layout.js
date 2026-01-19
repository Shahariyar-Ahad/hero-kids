import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hero-kids-bzq1.vercel.app"),

  title: {
    default: "Hero Kids – Smart Learning for Children",
    template: "%s | Hero Kids",
  },

  description:
    "Hero Kids is a smart learning platform designed to enhance children's creativity, motor skills, and problem-solving abilities through fun and interactive play.",

  applicationName: "Hero Kids",
  creator: "Shahariyar Ahad",
  publisher: "Hero Kids",

  icons: {
    icon: "https://i.ibb.co.com/VWFcYHfY/logo.webp",
    apple: "https://i.ibb.co.com/VWFcYHfY/logo.webp",
  },

  openGraph: {
    type: "website",
    siteName: "Hero Kids",
    images: [
      {
        url: "https://i.ibb.co.com/qhz1bzV/Screenshot-2026-01-19-222615.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [
      "https://i.ibb.co.com/qhz1bzV/Screenshot-2026-01-19-222615.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>

        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-320px)]">
          {children}
        </main>

        <footer className="py-2 md:w-11/12 mx-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
