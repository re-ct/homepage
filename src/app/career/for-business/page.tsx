import '../../globals.css';
import Contact from './Contact';
import Advisor from './Advisor';
import Plan from './Plan';
import Engineers from './Engineers';

export const metadata = {
  title: '【法人向け】Re:ProS Career',
  description: '',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/career/for-business',
  },
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <Engineers />
      <Plan />
      <Advisor />
      <Contact />
    </main>
  );
};

export default Demand;
