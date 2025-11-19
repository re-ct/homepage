import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { fcTopTitle } from '@/lib/const/BreadCrumbTitle';
import AboutScratch from './AboutScratch';
import KeyVisual from './KeyVisual';
import Feature from './Feature';
import Fee from './Fee';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';

export const metadata = {
  title: 'プログラミング教室Re:ProS(レプロス repros)フランチャイズオーナー募集',
  description:
    'プログラミング未経験でも安心！【Scratch専門】プログラミング教室Re:ProS(レプロス repros)のフランチャイズパートナー募集。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/school/fc',
  },
};


const School = () => {
  return (
    <main>
      <KeyVisual />
      <Feature />
      <Fee />
      <AboutScratch />
      <Flow />
      <Faq />
      <Contact />
      <BreadcrumbsNavigation titles={fcTopTitle} />
    </main>
  );
};

export default School;
