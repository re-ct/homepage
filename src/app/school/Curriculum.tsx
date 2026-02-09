import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingDetailImg from '../../../public/image/school/heading_curriculum.png';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { PlayCircle } from '@mui/icons-material';
import { Courses } from '../../lib/const/Courses';

const sxStyles = {
  wrap: {
    bgcolor: '#407BFF',
    py: 8,
    px: 3,
  },
  list: {
    display: 'grid',
    columnGap: '12px',
    alignItems: 'stretch',
    mt: 6,
    width: '900px',
    maxWidth: '100%',
    mx: 'auto',
    p: 0,
    gridTemplateColumns: 'repeat(3,1fr)',
    '@media screen and (max-width:768px)': {
      mt: 4,
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
    '@media screen and (max-width:768px)': {
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
    height: '100%',
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
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
    height: '108px',
    '@media screen and (max-width:768px)': {
      display: 'block',
      height: 'auto',
    },
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
    '&:hover': {
      bgcolor: '#171938',
    },
  },
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '204px',
      height: 'auto',
    },
    '@media screen and (max-width:768px)': {
      '& > img': {
        width: '177px',
      },
    },
  },
};

const Curriculum = () => {
  return (
    <Box sx={sxStyles.wrap}>
      <Typography variant="h2" sx={sxStyles.heading}>
        <img
          src={headingDetailImg.src}
          alt="コース一覧"
          width="316"
          height="62"
        />
      </Typography>
      <List sx={sxStyles.list}>
        {Courses.map((course, index) => (
          <ListItem sx={sxStyles.listItem} key={index}>
            <Link href={`/school/${course.slug}/`}>
              <Box sx={sxStyles.card}>
                <Typography sx={sxStyles.title}>
                  {course.name.category}
                  <br />
                  {course.name.level}
                </Typography>
                <img
                  src={`../../../image/school/${course.thumbnail}`}
                  alt={`${course.name.category}${course.name.level}のイメージ`}
                  width="800"
                  height="500"
                  style={{ marginTop: 32, width: '100%', height: 'auto',maxWidth: '500px' }}
                />
                <Typography variant="body1" sx={sxStyles.text}>
                  {course.summary}
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
  );
};

export default Curriculum;
