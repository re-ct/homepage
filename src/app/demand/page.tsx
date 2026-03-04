import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Contact from './components/Contact';
import { demandTopTitle } from '@/lib/const/BreadCrumbTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import { CommonLink } from '../../components/CommonLink';
import { commonSxStyles } from './components/Style';
import { ArrowForward } from '@mui/icons-material';

export const metadata = {
  title:
    'ソフトウェア開発の相談・依頼 | 開発実績多数！ソフトウェア開発の依頼は株式会社レクトへ',
};

type Service = {
  id: string;
  category: string;
  title: string;
  detail: string | ReactNode;
};

const service: Service[] = [
  {
    id: 'development',
    category: 'プロダクト開発支援',
    title: 'Webアプリ開発',
    detail: (
      <>
        Webサービスの機能開発やCMSの構築・カスタマイズなど、
        <br />
        バックエンドからフロントエンドまで一貫した実装を請け負います。
      </>
    ),
  },
  {
    id: 'ad',
    category: 'デジタルマーケティング開発支援',
    title: 'インタラクティブ広告制作',
    detail: (
      <>
        HTMLを利用した、スワイプやタップなどに応じることができる
        <br />
        インタラクティブ広告を制作します。
      </>
    ),
  },
];

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
  list: {
    mt: '48px',
    listStyle: 'none',
    'li>a': {
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      columnGap: '32px',
      alignItems: 'flex-start',
      '@media screen and (max-width:768px)': {
        gridTemplateColumns: '1fr',
        rowGap: '24px',
      },
    },
    '>li + li': {
      mt: '52px',
    },
  },
  title: {
    fontWeight: 'bold',
    mt: '4px',
  },
  details: {
    mt: '16px',
    '@media screen and (max-width:768px)': {
      br: {
        display: 'none',
      },
    },
  },
  category: {
    fontWeight: 'bold',
    color: commonSxStyles.color.primary,
  },
  button: {
    color: commonSxStyles.color.primary,
    border: 'solid 1px' + commonSxStyles.color.primary,
    borderRadius: '50px',
    padding: '8px 20px',
    width: 'fit-content',
    fontSize: '12px',
    fontWeight: 'bold',
    mt: '16px',
    columnGap: '8px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-out',
    '.arrow-icon': {
      fontSize: '14px',
    },
  },
  image: {
    width: '100%',
    aspectRatio: '1/1',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width:768px)': {
      aspectRatio: '300/150',
      width: '100%',
    },
    '> img': {
      width: '120%',
      height: 'auto',
      '@media screen and (max-width:768px)': {
        width: '100%',
      },
    },
  },
};

const Demand = () => {
  return (
    <main style={{ color: '#000' }}>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '50px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          開発支援事業
        </Typography>
        <Typography sx={sxStyles.text}>
          私たちの持つITの力で、お客様のあらゆるビジネス課題を解決へと導きます。
        </Typography>
        <Box component="ul" sx={sxStyles.list}>
          {service.map((item) => (
            <Box component="li" key={item.id}>
              <CommonLink
                link={{
                  href: `/demand/${item.id}`,
                  external: false,
                }}
              >
                <Box sx={sxStyles.image}>
                  <img
                    src={`../../../../image/demand/thumbnail_${item.id}.webp`}
                    width="1026"
                    height="1026"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={[
                      commonSxStyles.typography.normalText,
                      sxStyles.category,
                    ]}
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    sx={[commonSxStyles.typography.heading3, sxStyles.title]}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={[
                      commonSxStyles.typography.normalText,
                      sxStyles.details,
                    ]}
                  >
                    {item.detail}
                  </Typography>
                  <Typography sx={sxStyles.button}>
                    詳細へ
                    <ArrowForward className="arrow-icon" />
                  </Typography>
                </Box>
              </CommonLink>
            </Box>
          ))}
        </Box>
      </Box>
      <Contact />
      <BreadcrumbsNavigation titles={demandTopTitle} />
    </main>
  );
};

export default Demand;
