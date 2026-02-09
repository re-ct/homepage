import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Box from '@mui/material/Box';
import KeyVisual from './KeyVisual';
import AchievementList from './AchievementList';
import Introduction from './Introduction';
import Curriculum from './Curriculum';
import Teacher from './Teacher';
import Faq from './Faq';
import Access from './Access';
import Contact from './Contact';
import Materials from './Materials';
import Instagram from './Instagram';
import { schoolTopTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: '豊川市でプログラミングを学ぶならRe:ProS(レプロス repros)',
  description:
    '小学2年生~高校3年生までを対象とした豊川市のプログラミングスクール。現役エンジニアが低価格で教えます。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/school/',
  },
};

const School = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          mx: 'auto',
        }}
      >
        <KeyVisual />
        <AchievementList />
        <Introduction />
        <Curriculum />
        <Teacher />
        <Access />
        <Faq />
        <Contact />
        <Materials />
        <Instagram />
        <BreadcrumbsNavigation titles={schoolTopTitle} />
      </Box>
    </main>
  );
};

export default School;
