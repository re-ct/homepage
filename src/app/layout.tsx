import Header from '../components/Header/Header';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Footer from './Footer';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: '株式会社レクト',
  description: '社会のコミュニケーションをITの力でもっと活発に',
  robots: 'index,follow',
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
