import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingTeacherImg from '../../../public/image/school/heading_teacher.png';
import iconImg from '../../../public/image/school/icon_teacher.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const sxStyles = {
  list: {
    listStyleType: 'disc',
    pl: 2,
    '& > li': {
      display: 'list-item',
      listStyleType: 'disc',
      pl: 0,
      py: 0,
      fontSize: '14px',
    },
  },
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '81px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '58px',
      },
    },
  },
  wrap: {
    mt: 9,
    display: 'flex',
    width: '800px',
    maxWidth: '100%',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    mx: 'auto',
    alignItems: 'flex-start',
    columnGap: '32px',
    flexDirection: 'row-reverse',
    '@media screen and (max-width:450px)': {
      width: '100%',
      mt: 3,
      flexDirection: 'column',
    },
    '& > img': {
      maxWidth: '327px',
      width: '100%',
      height: 'auto',
    },
  },
  text: {
    width: 'calc(800px - 360px)',
    maxWidth: '100%',
  },
};

const Teacher = () => {
  return (
    <Box pt={6} pb={10} mx={3} id="school_teacher">
      <Typography variant="h2" sx={sxStyles.heading}>
        <img src={headingTeacherImg.src} alt="講師" width="127" height="59" />
      </Typography>
      <Box sx={sxStyles.wrap}>
        <img src={iconImg.src} width="654" height="568" />
        <Box sx={sxStyles.text}>
          <Typography variant="h6" fontWeight="bold" align="left">
            渡辺 優樹
          </Typography>
          <Typography variant="body2" mt={2} align="left">
            プライム上場のエイチームグループにて
            <br />
            5年間Webエンジニアを経験し、5人のメンバーのマネジメントも経験しました。
          </Typography>
          <Typography variant="body2" mt={2} align="left">
            プログラミングを通して、次の世代に残る何かを残したいと思い起業しました！
          </Typography>
          <Typography variant="body2" mt={2} align="left">
            とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={'bold'}
            mt={3}
            align="left"
          >
            経歴・資格について
          </Typography>
          <List sx={sxStyles.list}>
            <ListItem>名古屋大学大学院情報学研究科 修了</ListItem>
            <ListItem>高等学校教諭一種免許状「情報」 免許保有</ListItem>
            <ListItem>基本情報技術者 資格保有</ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Teacher;
