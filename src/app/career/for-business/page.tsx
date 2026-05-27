import '../../globals.css';
import Contact from './Contact';
import Advisor from './Advisor';
import Plan from './Plan';
import Engineers from './Engineers';
import KeyVisual from './KeyVisual';
import About from './About';

export const metadata = {
  title: '【採用担当者向け】Re:ProS Career',
  description:
    'ITエンジニア採用に特化した専門エージェントサービスです。現役エンジニアのキャリアアドバイザーが、貴社の現場に合う人材を厳選紹介。入社決定時のみ費用が発生する完全成功報酬型です。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/career/for-business',
  },
};

const CareerForBusiness = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <About />
      <Engineers />
      <Plan />
      <Advisor />
      <Contact />
    </main>
  );
};

export default CareerForBusiness;
