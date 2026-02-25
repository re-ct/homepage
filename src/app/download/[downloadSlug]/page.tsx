import '../../globals.css';
import Box from '@mui/material/Box';
import { Download } from '../../../lib/const/Download';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';
import Typography from '@mui/material/Typography';
import { ArrowForward } from '@mui/icons-material';
import { CommonLink } from '../../../components/CommonLink';

export async function generateStaticParams() {
  return Download.map((item) => ({
    downloadSlug: `${item.slug}`,
  }));
}

export async function generateMetadata({ params }: DownloadDetailsPageProps) {
  const { downloadSlug } = await params;
  const item = Download.find((item) => item.slug === downloadSlug);

  if (!item) {
    return {
      title: '資料が見つかりません | 株式会社レクト',
    };
  }

  return {
    title: `${item.name} | 株式会社レクト`,
  };
}

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
      px: '20px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
    '@media screen and (max-width:768px)': {
      px: '20px',
    },
  },
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 550px',
    mt: '52px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '40px',
      mt: '16px',
    },
  },
  otherTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.6',
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1.6',
    marginTop: '20px',
  },
  form: {
    iframe: {
      width: '100%',
      border: 'none',
      minHeight: '1500px',
    },
  },
  other: {
    mt: '80px',
    pb: '100px',
  },
  listWrap: {
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
    '@media screen and (max-width:768px)': {
      overflowX: 'scroll',
      px: '0',
    },
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    listStyle: 'none',
    gap: '62px 10px',
    mt: 3,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: 'repeat(3,90%)',
    },
    '>li': {
      '>a': {
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          '> .btn-container': {
            backgroundColor: '#00298A',
            color: '#fff',
          },
        },
      },
      '&:first-child': {
        '@media screen and (max-width:768px)': {
          pl: '20px',
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
  section: {
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
    pt: '70px',
    '@media screen and (max-width:768px)': {
      px: 0,
    },
  },
  summary: {
    '@media screen and (max-width:768px)': {
      px: '20px',
    },
  },
  details: {
    fontSize: '14px',
    mt: '8px',
  },
  category: {
    color: '#00298A',
    mt: '24px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

interface DownloadDetailsPageProps {
  params: Promise<{
    downloadSlug: string;
  }>;
}

const DownloadDetailsPage = async ({ params }: DownloadDetailsPageProps) => {
  const { downloadSlug } = await params;
  const item = Download.find((item) => `${item.slug}` === downloadSlug);

  if (!item) {
    return notFound();
  }

  const currentBreadcrumbs = [...downloadTitle, item.name];
  const otherItems = Download.filter(
    (item) => `${item.slug}` !== downloadSlug,
  ).slice(0, 3);
  return (
    <main>
      <Box component="section" sx={sxStyles.section}>
        <Typography variant="h1" sx={sxStyles.heading}>
          資料のお問い合わせ
        </Typography>
        <Typography sx={sxStyles.text}>
          資料を閲覧したい方は、お申し込みフォームからお問い合わせください。
        </Typography>
        <Box sx={sxStyles.wrap}>
          <Box sx={sxStyles.summary}>
            <img
              src={`../../../image/download/${item.thumbnail}`}
              alt=""
              width="1500"
              height="900"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginTop: '12px',
              }}
            />
            <Typography variant="h2" sx={sxStyles.name}>
              {item.name}
            </Typography>
            <Typography sx={sxStyles.details}>{item.details}</Typography>
            <Typography sx={sxStyles.category}># {item.category}</Typography>
          </Box>
          <Box sx={sxStyles.form}>
            <iframe src={item.form} width="640" height="auto">
              読み込んでいます…
            </iframe>
          </Box>
        </Box>
      </Box>
      {otherItems && otherItems.length > 0 && (
        <Box sx={sxStyles.other}>
          <Typography variant="h2" sx={sxStyles.otherTitle}>
            その他の資料
          </Typography>
          <Box sx={sxStyles.listWrap}>
            <Box component="ul" sx={sxStyles.list}>
              {otherItems.map((item) => (
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
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '500/300',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                    <Typography sx={sxStyles.title}>{item.name}</Typography>
                    <Box className="btn-container" sx={sxStyles.button}>
                      ダウンロード
                      <ArrowForward className="arrow-icon" />
                    </Box>
                  </CommonLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      <BreadcrumbsNavigation titles={currentBreadcrumbs} />
    </main>
  );
};

export default DownloadDetailsPage;
