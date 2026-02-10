import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Box from '@mui/material/Box';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: '資料一覧 | 株式会社レクト',
  description:
    '株式会社レクトのサービスや活動に関する資料をご覧いただけます。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/download/',
  },
};

const Download = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          mx: 'auto',
        }}
      >
        <h1>資料一覧</h1>
        <p>弊社のサービスや活動に関する資料をご覧いただけます。</p>
        <BreadcrumbsNavigation titles={downloadTitle} />
      </Box>
    </main>
  );
};

export default Download;
