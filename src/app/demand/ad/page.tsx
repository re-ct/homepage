import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Case from './Case';
import Plan from './Plan';
import Contact from '../components/Contact';
import Company from '../components/Company';
import { adTopTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title:
    'インタラクティブ広告の制作代行 | 開発実績多数！ソフトウェア開発の依頼は株式会社レクトへ',
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <Case />
      <Plan />
      <Contact />
      <Company />
      <BreadcrumbsNavigation titles={adTopTitle} />
    </main>
  );
};

export default Demand;
