import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Box from '@mui/material/Box';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';
import { Download } from '../../lib/const/Download';
import Typography from '@mui/material/Typography';
import { CommonLink } from '../../components/CommonLink';
import { ArrowForward } from '@mui/icons-material';
import { ArrowDownward } from '@mui/icons-material';

export const metadata = {
  title: 'お役立ち資料一覧 | 株式会社レクト',
  description: '株式会社レクトのサービスや活動に関する資料をご覧いただけます。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/download/',
  },
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
  box: {
    mt: '52px',
    '& + &': {
      mt: '72px',
    },
  },
  category: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    listStyle: 'none',
    gap: '62px 10px',
    mt: 3,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
    '>li >a': {
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        '> p': {
          backgroundColor: '#00298A',
          color: '#fff',
        },
      },
    },
  },
  button: {
    color: '#00298A',
    border: 'solid 1px #00298A',
    borderRadius: '50px',
    padding: '8px 20px',
    width: 'fit-content',
    fontSize: '12px',
    fontWeight: 'bold',
    mt: '18px',
    columnGap: '8px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-out',
    '.arrow-icon': {
      fontSize: '14px',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    mt: 2,
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px 20px',
    color: '#00298A',
    mt: '52px',
    fontWeight: 'bold',
    a: {
      borderBottom: 'solid 1px #00298A',
      lineHeight: '1.6',
      paddingBottom: '3px',
      display: 'flex',
      columnGap: '4px',
      alignItems: 'center',
      fontSize: '16px',
      '.arrow-icon': {
        fontSize: '18px',
      },
    },
  },
  section: {
    mt: '72px',
    scrollMarginTop: '100px',
  },
};

const DownloadPage = () => {
  const categories = Array.from(new Set(Download.map((item) => item.category)));
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '100px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          お役立ち資料一覧
        </Typography>
        <Typography sx={sxStyles.text}>
          弊社のサービスや活動に関する資料をご覧いただけます。
        </Typography>
        <Box component="nav" sx={sxStyles.nav}>
          {categories.map((category) => (
            <a key={category} href={`#${category}`}>
              {category}
              <ArrowDownward className="arrow-icon" />
            </a>
          ))}
        </Box>
        {categories.map((category) => (
          <Box
            component="section"
            key={category}
            id={category}
            sx={sxStyles.section}
          >
            <Typography variant="h2" sx={sxStyles.category}>
              {category}
            </Typography>
            <Box component="ul" sx={sxStyles.list}>
              {Download.filter((item) => item.category === category).map(
                (item) => (
                  <Box component="li" key={item.slug}>
                    <CommonLink
                      link={{
                        href: `/download/${item.slug}`,
                        external: false,
                      }}
                    >
                      <img
                        src={`../../../image/download/${item.thumbnail}`}
                        alt=""
                        width="500"
                        height="300"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                        }}
                      />
                      <Typography component="h3" sx={sxStyles.title}>
                        {item.name}
                      </Typography>
                      <Typography sx={sxStyles.button}>
                        ダウンロード
                        <ArrowForward className="arrow-icon" />
                      </Typography>
                    </CommonLink>
                  </Box>
                ),
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <BreadcrumbsNavigation titles={downloadTitle} />
    </main>
  );
};

export default DownloadPage;
