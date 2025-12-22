import '../globals.css';
import Contact from './Contact';
import Flow from './Flow';
import Advisors from './Advisors';
import Features from './Features';
import KeyVisual from './KeyVisual';

export const metadata = {
  title: 'エンジニアのお悩みを無料でサポート Re:ProS Career',
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
