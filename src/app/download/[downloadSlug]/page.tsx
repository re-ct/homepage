import '../../globals.css';
import Box from '@mui/material/Box';
import { Download } from '../../../lib/const/Download';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';
import Typography from '@mui/material/Typography';

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
    },
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
          資料のお問い合わせ
        </Typography>
        <Typography sx={sxStyles.text}>
          資料を閲覧したい方は、お申し込みフォームからお問い合わせください。
        </Typography>
        <Box sx={sxStyles.wrap}>
          <Box>
            <Typography variant="h1" sx={sxStyles.name}>
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
      <BreadcrumbsNavigation titles={currentBreadcrumbs} />
    </main>
  );
};

export default DownloadDetailsPage;
