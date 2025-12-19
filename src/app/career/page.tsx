import '../globals.css';
import Contact from './Contact';
import Flow from './Flow';

export const metadata = {
  title:
    'エンジニアのお悩みを無料でサポート Re:ProS Career',
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <Flow />
      <Contact />
    </main>
  );
};

export default Demand;
