import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { fcTopTitle } from '@/lib/const/BreadCrumbTitle';
import AboutScratch from './AboutScratch';
import KeyVisual from './KeyVisual';
import Feature from './Feature';
import Fee from './Fee';
import Comparison from './Comparison';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';

export const metadata = {
  title:
    'こども向けプログラミング教室のフランチャイズパートナー募集 | プログラミング教室 Re:ProS(レプロス repros)',
  description:
    'Re:Pros(レプロス repros)のFCはプログラミングの知識や経験がない未経験の方でも専門的な教材の導入が行えます。小学生・中学生向けこどもプログラミング教室のフランチャイズパートナーを募集しています。Scratch専門のため、たくさんの教材知識は必要ありません。まずはお気軽にご相談ください。',
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
      <Comparison />
      <AboutScratch />
      <Flow />
      <Faq />
      <Contact />
      <BreadcrumbsNavigation titles={fcTopTitle} />
    </main>
  );
};

export default School;
