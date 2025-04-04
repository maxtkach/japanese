import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import StaticNavigation from "./components/StaticNavigation";
import Footer from "./components/Footer";
import LocomotiveScrollProvider from './components/providers/LocomotiveScrollProvider';

// Импортируем компоненты с анимацией динамически
const NavigationWithNoSSR = dynamic(
  () => import('./components/Navigation'),
  { ssr: false, loading: () => <StaticNavigation /> }
);

const SmoothScrollProviderWithNoSSR = dynamic(
  () => import('./components/providers/SmoothScrollProvider'),
  { ssr: false }
);

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter" 
});

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp" 
});

export const metadata: Metadata = {
  title: "Сакура | Ресторан Японської Кухні в Києві",
  description: "Автентична японська кухня в сучасному виконанні. Традиційний смак з вишуканою подачею в центрі Києва. Суші, роли, гарячі страви та десерти.",
  keywords: "японський ресторан, суші в Києві, роли, вагю, сашімі, японська кухня, ресторан Сакура, Київ, Хрещатик",
  authors: [{ name: "Sakura Restaurant" }],
  creator: "Sakura Restaurant Team",
  publisher: "Sakura Restaurant",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  applicationName: "Sakura Restaurant",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://sakura-restaurant.ua",
    title: "Сакура | Ресторан Японської Кухні в Києві",
    description: "Автентична японська кухня в сучасному виконанні. Традиційний смак з вишуканою подачею в центрі Києва.",
    siteName: "Sakura Restaurant",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${notoSerifJP.variable}`}>
      <head>
        <link rel="canonical" href="https://sakura-restaurant.ua" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
        <LocomotiveScrollProvider>
          <NavigationWithNoSSR />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
} 