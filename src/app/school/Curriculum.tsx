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
    width: '800px',
    maxWidth: '100%',
    mx: 'auto',
    p: 0,
    flexWrap: 'wrap',
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
      pt: 5,
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
      justifyContent: 'flex-start',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-4px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
    '@media screen and (max-width:768px)': {
      '& + &': {
        mt: 4,
      },
    },
  },
  card: {
    px: 3,
    pb: 4,
  },
  title: {
    fontSize: 24,
    color: '#24285B',
    fontWeight: 'bold',
    mt: 2,
  },
  text: {
    fontSize: 14,
    mt: '12px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
    height: '84px',
    '@media screen and (max-width:768px)': {
      display: 'block',
      height: 'auto',
    },
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: '12px 20px 12px 30px',
    backgroundColor: '#24285B',
    color: '#fff',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    width: '100%',
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
  target: {
    padding: '4px 12px 3px 12px',
    backgroundColor: '#D5DFF7',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inlineBlock',
    width: 'fit-content',
    color: '#24285B',
    borderRadius: '2px',
  },
  price: {
    mt: 1,
    fontSize: '14px',
    color: '#24285B',
  },
  priceTax: {
    fontSize: '12px',
    ml: '2px',
  },
  priceNote: {
    fontSize: '10px',
    ml: '2px',
  },
  note: {
    mt: '20px',
    fontSize: '12px',
    color: '#fff',
    textAlign: 'center',
    '@media screen and (max-width:768px)': {
      textAlign: 'left',
    },
  },
  container: {
    maxWidth: '1000px',
    marginInline: 'auto',
  },
};

const Curriculum = () => {
  return (
    <Box sx={sxStyles.wrap}>
      <Box sx={sxStyles.container}>
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
                  <Typography sx={sxStyles.target}>{course.target}</Typography>
                  <Typography sx={sxStyles.title}>
                    {course.name.category} {course.name.level}
                  </Typography>
                  <Typography sx={sxStyles.price}>
                    月額{course.price.tuition.toLocaleString()}円
                    <Typography component="span" sx={sxStyles.priceTax}>
                      (税込)
                    </Typography>
                    <Typography component="span" sx={sxStyles.priceNote}>
                      ※
                    </Typography>
                  </Typography>
                  <img
                    src={`../../../image/school/${course.thumbnail}`}
                    alt={`${course.name.category}${course.name.level}のイメージ`}
                    width="1104"
                    height="632"
                    style={{
                      marginTop: 20,
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Typography variant="body1" sx={sxStyles.text}>
                    {course.summary}
                  </Typography>
                </Box>
                <Box sx={sxStyles.button}>
                  詳細
                  <PlayCircle />
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
        <Typography sx={sxStyles.note}>
          ※ 別途、入会費10,000円（初回のみ）、教材費500円（月額）かかります。
        </Typography>
      </Box>
    </Box>
  );
};

export default Curriculum;
