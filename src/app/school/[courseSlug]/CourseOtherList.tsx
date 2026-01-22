import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import headingDetailImg from '../../../../public/image/school/heading_other_courses.png';
import Link from 'next/link';
import { PlayCircle } from '@mui/icons-material';

interface CourseOtherListProps {
  unreleasedCourses: {
    id: number;
    slug: string;
    name: {
      category: string;
      level: string;
    };
    summary: string;
  }[];
}

const sxStyles = {
  otherCourses: {
    backgroundColor: '#F5F5F5',
    pt: 7,
    pb: 7,
    px: 3,
  },
  list: {
    display: 'flex',
    columnGap: '20px',
    alignItems: 'stretch',
    mt: 8,
    width: '800px',
    maxWidth: '100%',
    mx: 'auto',
    p: 0,
    flexWrap: 'wrap',
    '@media screen and (max-width:450px)': {
      display: 'block',
      width: '100%',
    },
  },
  listItem: {
    p: 0,
    width: '100%',
    flex: 1,
    '& > a': {
      height: '100%',
    },
    '@media screen and (max-width:450px)': {
      '& + &': {
        mt: 4,
      },
    },
  },
  card: {
    px: 3,
    py: 5,
    borderTop: 'solid 8px #24285B',
    backgroundColor: '#fff',
    width: '100%',
    height: '400',
    backgroundSize: 16,
    backgroundPosition: '50% 50%',
    backgroundImage:
      'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 24,
    color: '#24285B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    mt: 4,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: '8px 40px 8px 50px',
    borderRadius: 66,
    backgroundColor: '#24285B',
    color: '#fff',
    boxShadow: 'none',
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  wrap: {
    width: '100%',
    maxWidth: '800px',
    mx: 'auto',
  },
};

const CourseOtherList: React.FC<CourseOtherListProps> = ({
  unreleasedCourses,
}) => {
  return (
    <Box sx={sxStyles.otherCourses}>
      <Box sx={sxStyles.wrap}>
        <Typography variant="h2">
          <img src={headingDetailImg.src} alt="他のコース" width="164" />
        </Typography>
        <List sx={sxStyles.list}>
          {unreleasedCourses.map((unreleasedCourse) => (
            <ListItem key={unreleasedCourse.id} sx={sxStyles.listItem}>
              <Link href={`/school/${unreleasedCourse.slug}`}>
                <Box sx={sxStyles.card}>
                  <Typography sx={sxStyles.title}>
                    {unreleasedCourse.name.category}
                    <br />
                    {unreleasedCourse.name.level}
                  </Typography>
                  <Typography variant="body1" sx={sxStyles.text}>
                    {unreleasedCourse.summary}
                  </Typography>
                  <Box sx={sxStyles.button}>
                    詳細
                    <PlayCircle />
                  </Box>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CourseOtherList;
