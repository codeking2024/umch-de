import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faTiktok, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import * as React from "react";

library.add(faInstagram, faTiktok, faYoutube, faFacebook);

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMCH",
  description: "UMCH Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const lang: string = 'de';
  return (
    <html lang={`'${lang}'`}>
      <body className={montserrat.className}>
        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          async
        />
      </body>
    </html>
  );
}
