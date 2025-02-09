import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const ClashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

const InterTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Iarann Wealth Financial | Advisory for Everyone",
  description: "Full-service financial planning & investment management for entrepreneurs, focusing on tax optimization and wealth building strategies.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Z312HQG0M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Z312HQG0M');
            `,
          }}
        />
      </head>
      <body
        className={`${ClashGrotesk.variable} ${InterTight.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
