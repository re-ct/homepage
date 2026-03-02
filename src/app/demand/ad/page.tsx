import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Service from './Service';
import Case from './Case';
import Point from './Point';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';
import Company from './Company';
import { adTopTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title:
    'インタラクティブ広告の制作代行 | 開発実績多数！ソフトウェア開発の依頼は株式会社レクトへ',
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <BreadcrumbsNavigation titles={adTopTitle} />
    </main>
  );
};

export default Demand;
