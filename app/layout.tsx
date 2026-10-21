import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hardik More - building in the tails.",
    template: "%s / Hardik More",
  },
  description:
    "Hardik More is an operator turned investor at Sorin Investments, backing bold ideas early. Previously built developer APIs, trading platforms and agentic infrastructure at Dhan.",
  authors: [{ name: "Hardik More" }],
  metadataBase: new URL("https://hardikmore.com"),
  openGraph: {
    siteName: "Hardik More",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hardik__more",
    creator: "@hardik__more",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VDTTGDYQZ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8VDTTGDYQZ');
          `}
        </Script>
      </body>
    </html>
  );
}
