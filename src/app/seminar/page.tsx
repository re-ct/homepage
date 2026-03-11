import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Box from '@mui/material/Box';
import { seminarTitle } from '@/lib/const/BreadCrumbTitle';
import Typography from '@mui/material/Typography';
import SeminarList from './SeminarList';

export const metadata = {
  title: 'セミナー一覧 | 株式会社レクト',
  description: '弊社の知見や最新情報など、多彩なプログラムをご用意しています。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/seminar/',
  },
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
};

const Seminar = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '100px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          セミナー一覧
        </Typography>
        <Typography sx={sxStyles.text}>
          弊社の知見や最新情報など、多彩なプログラムをご用意しています。
        </Typography>
        <SeminarList />
      </Box>
      <BreadcrumbsNavigation titles={seminarTitle} />
    </main>
  );
};

export default Seminar;
