import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Example from './Example';
import Case from './Case';
import Plan from './Plan';
import Contact from '../components/Contact';
import Company from '../components/Company';
import { adTopTitle } from '@/lib/const/BreadCrumbTitle';
import { adContact } from '../../../lib/const/Link';

export const metadata = {
  title: 'インタラクティブ広告の制作承ります | 株式会社レクト',
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <Example />
      <Case />
      <Plan />
      <Contact url={adContact}/>
      <Company />
      <BreadcrumbsNavigation titles={adTopTitle} />
    </main>
  );
};

export default Demand;
