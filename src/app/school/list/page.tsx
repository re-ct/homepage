import '../../globals.css';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import ClassroomList from './ClassroomList';
import OnlineMaterials from './OnlineMaterials';
import FcCta from './FcCta';
import { schoolListTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: '開講教室一覧 | プログラミングを学ぶならRe:ProS(レプロス)',
  description:
    'プログラミング教室Re:ProS(レプロス repros)のコースを受講できる教室の一覧です。各教室の住所・電話番号・対応コース・開講時間をご紹介します。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/school/list/',
  },
};

const SchoolList = () => {
  return (
    <main>
      <ClassroomList />
      <OnlineMaterials />
      <FcCta />
      <BreadcrumbsNavigation titles={schoolListTitle} />
    </main>
  );
};

export default SchoolList;
