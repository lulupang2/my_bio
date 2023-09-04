import Analytics from "@libs/analytics";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: "ko" }, { locale: "en" }];
}
export const metadata: Metadata = {
  title: "Hello!👋",
  description: "This is my personal website.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://bio.jisung.pro",
    siteName: "🐒🐒🐒🐒🐒🐒🐒",
    title: "Hello!👋",
    description: "This is my personal website.",
    images: [
      {
        url: "https://tpucdn.com/forums/data/avatars/l/190/190965.jpg",
        width: 400,
        height: 400,
        alt: "bio.jisung.pro",
      },
    ],
  },
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="dark">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
