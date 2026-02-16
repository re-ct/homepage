import '../../globals.css';
import Box from '@mui/material/Box';
import { Download } from '../../../lib/const/Download';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { downloadTitle } from '@/lib/const/BreadCrumbTitle';

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

interface DownloadDetailsPageProps {
  params: Promise<{
    downloadSlug: string;
    name: {
      category: string;
      level: string;
    };
  }>;
}

const DownloadDetailsPage: React.FC<DownloadDetailsPageProps> = async ({
  params,
}: DownloadDetailsPageProps) => {
  const { downloadSlug } = await params;
  const course = Download.find((course) => `${course.slug}` === downloadSlug);

  if (!course) {
    return notFound();
  }

  downloadTitle.push(`${course.name}`);

  return (
    <main>
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          mx: 'auto',
        }}
      >
        <BreadcrumbsNavigation titles={downloadTitle} />
      </Box>
    </main>
  );
};

export default DownloadDetailsPage;
