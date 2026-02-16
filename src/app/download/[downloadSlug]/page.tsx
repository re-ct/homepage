import '../../globals.css';
import Box from '@mui/material/Box';
import { Download } from '../../../lib/const/Download';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';
import Typography from '@mui/material/Typography';
import { ArrowForward } from '@mui/icons-material';

export async function generateStaticParams() {
  return Download.map((course) => ({
    downloadSlug: `${course.slug}`,
  }));
}

export async function generateMetadata({ params }: DownloadDetailsPageProps) {
  const { downloadSlug } = await params;
  const course = Download.find((course) => course.slug === downloadSlug);

  if (!course) {
    return {
      title: '資料が見つかりません | 株式会社レクト',
    };
  }

  return {
    title: `${course.name} | 株式会社レクト`,
  };
}

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    }
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 550px',
    mt: '72px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '40px',
      mt: '52px',
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
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.6',
  },
  form: {
    iframe: {
      width: '100%',
      border: 'none',
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
    }
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
    '>li' :{
      '>a': {
        display: 'flex',
        flexDirection: 'column',
      },
      '&:first-child': {
        '@media screen and (max-width:768px)': {
          pl: '20px',
        }
      }
    }
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
    columnsGap: '8px',
    display: 'flex',
    alignItems: 'center',
    '.arrow-icon': {
      fontSize: '14px',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    mt: 2,
  },
};

interface DownloadDetailsPageProps {
  params: Promise<{
    downloadSlug: string;
  }>;
}

const DownloadDetailsPage = async ({ params }: DownloadDetailsPageProps) => {
  const { downloadSlug } = await params;
  const course = Download.find((course) => `${course.slug}` === downloadSlug);

  if (!course) {
    return notFound();
  }

  const currentBreadcrumbs = [...downloadTitle, course.name];
  const otherCourses = Download
  .filter((item) => `${item.slug}` !== downloadSlug)
  .slice(0, 3);
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          資料のお問い合わせ
        </Typography>
        <Typography sx={sxStyles.text}>
          資料を閲覧したい方は、お申し込みフォームからお問い合わせください。
        </Typography>
        <Box sx={sxStyles.wrap}>
          <Box>
            <Typography variant="h2" sx={sxStyles.name}>
              {course.name}
            </Typography>
            <img
              src={`../../../image/download/${course.thumbnail}`}
              alt=""
              width="500"
              height="300"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            />
            <Typography sx={sxStyles.text}>{course.details}</Typography>
          </Box>
          <Box sx={sxStyles.form}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSexsVLTHkqbV6XYvG_5X8PBckIWwYf3mXybYD7PKg0YU9IL5A/viewform"
              width="640"
              height="1300"
            >
              読み込んでいます…
            </iframe>
          </Box>
        </Box>
      </Box>
      <Box sx={sxStyles.other}>
        <Typography variant="h2" sx={sxStyles.otherTitle}>
          その他の関連資料
        </Typography>
        <Box sx={sxStyles.listWrap}>
          <Box component="ul" sx={sxStyles.list}>
            {otherCourses.map((item) => (
              <Box component="li" key={item.slug}>
                <a href={`/download/${item.slug}`}>
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
                </a>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <BreadcrumbsNavigation titles={currentBreadcrumbs} />
    </main>
  );
};

export default DownloadDetailsPage;
