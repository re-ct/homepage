import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Service from './Service';
import Case from './Case';
import Point from './Point';
import Flow from './Flow';
import Faq from './Faq';
import Contact from '../components/Contact';
import Company from '../components/Company';
import { demandDevelopmentTitle } from '@/lib/const/BreadCrumbTitle';
import { contact } from '../../../lib/const/Link';

export const metadata = {
  title:
    'ソフトウェア開発の相談・依頼 | 開発実績多数！ソフトウェア開発の依頼は株式会社レクトへ',
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <Service />
      <Case />
      <Point />
      <Flow />
      <Faq />
      <Contact url={contact}/>
      <Company />
      <BreadcrumbsNavigation titles={demandDevelopmentTitle} />
    </main>
  );
};

export default Demand;
