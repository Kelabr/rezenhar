import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rezenhar",
  description: "Jogo Para festas com amigos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans dark ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        {/* Script do MoneyTag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var mt = document.createElement('script');
                mt.src = 'https://cdn.moneytag.io/moneytag.js';
                mt.async = true;
                document.body.appendChild(mt);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
