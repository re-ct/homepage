import '../../globals.css';
import Box from '@mui/material/Box';
import CourseDetail from './CourseDetail';
import CourseOtherList from './CourseOtherList';
import Contact from '../Contact';
import Instagram from '../Instagram';
import { Courses } from '../../../lib/const/Courses';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { schoolTopTitle } from '@/lib/const/BreadCrumbTitle';

export async function generateStaticParams() {
  return Courses.map((course) => ({
    courseSlug: `${course.slug}`,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { courseSlug } = await params;
  const course = Courses.find((course) => course.slug === courseSlug);

  if (!course) {
    return {
      title:
        'コースが見つかりません | プログラミングを学ぶならRe:ProS(レプロス)',
    };
  }

  return {
    title: `${course.name.category} ${course.name.level}コース | プログラミングを学ぶならRe:ProS(レプロス)`,
  };
}

interface CoursePageProps {
  params: Promise<{
    courseSlug: string;
    name: {
      category: string;
      level: string;
    };
  }>;
}

const CoursePage: React.FC<CoursePageProps> = async ({
  params,
}: CoursePageProps) => {
  const { courseSlug } = await params;
  const course = Courses.find((course) => `${course.slug}` === courseSlug);
  const unreleasedCourses = Courses.filter(
    (course) => `${course.slug}` !== courseSlug,
  );

  if (!course) {
    return notFound();
  }

  schoolTopTitle.push(`${course.name.category} ${course.name.level}コース`);

  return (
    <main style={{ scrollMarginTop: '80px' }}>
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          mx: 'auto',
        }}
      >
        <CourseDetail course={course} />
        <CourseOtherList unreleasedCourses={unreleasedCourses} />
        <Contact />
        <Instagram />
        <BreadcrumbsNavigation titles={schoolTopTitle} />
      </Box>
    </main>
  );
};

export default CoursePage;
