import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-two-ashy-qzoc8vj3e0.vercel.app"),
  title: "Yatharth Nagpal — AI & ML Systems Engineer",
  description:
    "AI & ML Systems Engineer specializing in fine-tuning LLMs, RAG pipelines, computer vision models, and production web backends.",
  keywords: [
    "Yatharth Nagpal",
    "AI Systems Engineer",
    "ML Engineer",
    "Deep Learning",
    "RAG Developer",
    "Full Stack AI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Yatharth Nagpal" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "Yatharth Nagpal — AI & ML Systems Engineer",
    description:
      "AI & ML Systems Engineer building intelligent platforms, RAG pipelines, fine-tuned LLMs, and deep learning systems.",
    url: "https://portfolio-two-ashy-qzoc8vj3e0.vercel.app",
    siteName: "Yatharth Nagpal Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatharth Nagpal — AI & ML Systems Engineer",
    description:
      "AI & ML Systems Engineer building intelligent platforms, RAG pipelines, and deep learning systems.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
