import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a>MyLogo</a> {/* Replace with your logo image or text */}
        </div>
        <div className="navButtons">
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body className={poppins.className}>{children}</body>
=======
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
>>>>>>> Stashed changes
    </html>
  );
}