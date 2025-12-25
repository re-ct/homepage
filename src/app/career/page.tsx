import '../globals.css';
import Contact from './Contact';
import Flow from './Flow';
import Advisors from './Advisors';
import Features from './Features';
import KeyVisual from './KeyVisual';

export const metadata = {
  title: 'エンジニアのお悩みを無料でサポート Re:ProS Career',
  description:
    'キャリアのモヤモヤ、現役エンジニアと話してみませんか？現場を知るプロが、スキル評価や成長ロードマップを個別に提案。転職意欲の有無は問いません。まずは今の悩みをお聞かせください。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/career',
  },
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <KeyVisual />
      <Features />
      <Advisors />
      <Flow />
      <Contact />
    </main>
  );
};

export default Demand;
