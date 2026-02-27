import './globals.css';
import Kv from '../modules/Kv';
import Company from '../modules/Company';
import Business from '../modules/Business';
import Recruitment from '@/modules/Recuritment';
import Contact from '@/modules/Contact';
import BreadcrumbsNavigation from './BreadcrumbsNavigation';
import { schoolTopTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: '株式会社レクト',
  description: '開発業務の請負やプログラミング教室の運営を行っております。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp',
  },
};

export default function Home() {
  return (
    <main>
      <Kv />
      <Business />
      <iframe
        src="/sample/sample.html"
        width="500"
        height="300"
        style={{ border: 'none' }}
        title="GWD Content" />
      <Company />
      <Recruitment />
      <Contact />
      <BreadcrumbsNavigation titles={schoolTopTitle} />
    </main>
  );
}
