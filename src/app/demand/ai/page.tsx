import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Worry from './Worry';
import Reason from './Reason';
import Service from './Service';
import Case from './Case';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';
import { demandAiTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: 'AI導入・活用支援 | 株式会社レクト',
  description:
    'AIを使いたいけれど、何から始めればいいか分からない企業のお悩みを、AIを実務で活用するエンジニアが解決。課題整理から導入・開発・運用改善まで、必要な支援を提供します。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/demand/ai/',
  },
};

const DemandAi = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <Worry />
      <Reason />
      <Service />
      <Case />
      <Flow />
      <Faq />
      <Contact />
      <BreadcrumbsNavigation titles={demandAiTitle} />
    </main>
  );
};

export default DemandAi;
