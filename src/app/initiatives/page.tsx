import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Contact from '../demand/components/Contact';
import { commonSxStyles } from '../demand/components/Style';
import { initiativesTitle } from '@/lib/const/BreadCrumbTitle';
import { contact } from '@/lib/const/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: '社内の取り組み | 株式会社レクト',
  description: '株式会社レクトの働きやすい会社づくりについてご紹介します。',
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  introduction: {
    mt: '8px',
    whiteSpace: 'pre-line',
  },
  section: {
    mt: '64px',
    '@media screen and (max-width:768px)': {
      mt: '48px',
    },
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  article: {
    mt: '32px',
  },
  articleHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1.7,
    borderLeft: 'solid 3px' + commonSxStyles.color.primary,
    paddingLeft: '12px',
  },
  articleText: {
    mt: '16px',
    '& + &': {
      mt: '2px',
    },
  },
};

const Initiatives = () => (
  <main style={{ color: '#000' }}>
    <Box
      component="section"
      sx={{ maxWidth: '940px', mx: 'auto', px: '20px', pt: '70px', pb: '50px' }}
    >
      <Typography variant="h1" sx={sxStyles.heading}>
        社内の取り組み
      </Typography>
      <Typography
        sx={[commonSxStyles.typography.normalText, sxStyles.introduction]}
      >
        {
          '私たちはより良い会社を目指して、さまざまな取り組みを行っています。\nここでは、私たちの活動実績や認定についてご紹介します。'
        }
      </Typography>

      <Box component="section" sx={sxStyles.section}>
        <Typography variant="h2" sx={sxStyles.sectionHeading}>
          働きやすい会社づくり
        </Typography>
        <Box component="article" sx={sxStyles.article}>
          <Typography variant="h3" sx={sxStyles.articleHeading}>
            有給休暇の取得促進
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.normalText, sxStyles.articleText]}
          >
            心身ともに充実した状態で働けるよう、有給休暇を取得しやすい環境づくりを進めています。
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.normalText, sxStyles.articleText]}
          >
            具体的な取り組みとして、普段から業務の調整や情報共有を行い、業務をスムーズに引き継げる体制を整えています。
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.normalText, sxStyles.articleText]}
          >
            その結果、2026年10月時点で<strong>有給休暇取得率60％を達成</strong>
            。
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.normalText, sxStyles.articleText]}
          >
            今後も、仕事と休暇のバランスを大切にしながら、より働きやすい職場を目指してまいります。
          </Typography>
        </Box>
      </Box>
    </Box>
    <Contact url={contact} />
    <BreadcrumbsNavigation titles={initiativesTitle} />
  </main>
);

export default Initiatives;
