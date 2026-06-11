import Header from '../components/Header/Header';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Footer from '../components/Footer/Footer';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: '株式会社レクト',
  description: '社会のコミュニケーションをITの力でもっと活発に',
  robots: 'index,follow',
  icons: {
    icon: [{ url: '/icon.ico', type: 'image/x-icon' }],
    shortcut: [{ url: '/icon.ico', type: 'image/x-icon' }],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-MRQP5SQ2" />
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
