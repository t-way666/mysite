import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://t-way666.github.io/mysite/'),
  title: "Ибодулло Исматов - Фронтенд-разработчик",
  description: "Разрабатываю сайты и веб-приложения для малого и среднего бизнеса. Дизайн, верстка и фронтенд-разработка.",
  openGraph: {
    title: "Ибодулло Исматов - Фронтенд-разработчик",
    description: "Разрабатываю сайты и веб-приложения для малого и среднего бизнеса.",
    url: 'https://mysite.vercel.app',
    siteName: 'Ibodullo Ismatov Portfolio',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}