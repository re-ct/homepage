import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingTeacherImg from '../../../public/image/school/heading_teacher.png';
import watanabe from '../../../public/image/school/icon_watanabe.png';
import suzuki from '../../../public/image/school/icon_suzuki.png';
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
  teacher: {
    maxWidth: '100%',
    textAlign: 'center',
    mx: 'auto',
    listStyle: 'none',
    '& > img': {
      maxWidth: '250px',
      width: '100%',
      height: 'auto',
    },
    '&:first-child': {
      '@media screen and (max-width:768px)': {
        paddingLeft: '24px',
      },
    },
    '&:last-child': {
      '@media screen and (max-width:768px)': {
        paddingRight: '24px',
      },
    },
  },
  body: {
    textAlign: 'left',
    mt: 2,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '20px',
  },
  teacherListWrap: {
    '@media screen and (max-width:768px)': {
      overflowX: 'scroll',
    },
  },
  teacherList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '48px',
    maxWidth: '800px',
    marginInline: 'auto',
    mt: 8,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '90% 90%',
      columnGap: '24px',
    },
  },
  subTitle: {
    fontWeight: 'bold',
    mt: 3,
    textAlign: 'left',
  },
  section: {
    pt: 9,
    pb: 10,
    mx: 3,
    '@media screen and (max-width:768px)': {
      mx: 0,
    },
  },
};

const Teacher = () => {
  return (
    <Box sx={sxStyles.section} id="school_teacher">
      <Typography variant="h2" sx={sxStyles.heading}>
        <img src={headingTeacherImg.src} alt="講師" width="127" height="59" />
      </Typography>
      <Box sx={sxStyles.teacherListWrap}>
        <Box component="ul" sx={sxStyles.teacherList}>
          <Box component="li" sx={sxStyles.teacher}>
            <img src={watanabe.src} width="500" height="416" />
            <Typography variant="h3" sx={sxStyles.name}>
              渡辺 優樹
            </Typography>
            <Typography variant="body2" sx={sxStyles.body}>
              プライム上場のエイチームグループにて5年間Webエンジニアを経験し、5人のメンバーのマネジメントも経験しました。
            </Typography>
            <Typography variant="body2" sx={sxStyles.body}>
              プログラミングを通して、次の世代に残る何かを残したいと思い起業しました！とにかくまずはプログラミングを楽しいと思ってもらえるように頑張ります！
            </Typography>
            <Typography sx={sxStyles.subTitle}>経歴・資格について</Typography>
            <List sx={sxStyles.list}>
              <ListItem>名古屋大学大学院情報学研究科 修了</ListItem>
              <ListItem>高等学校教諭一種免許状「情報」 免許保有</ListItem>
              <ListItem>基本情報技術者 資格保有</ListItem>
            </List>
          </Box>
          <Box component="li" sx={sxStyles.teacher}>
            <img src={suzuki.src} width="500" height="416" />
            <Typography variant="h3" sx={sxStyles.name}>
              鈴木 佑基
            </Typography>
            <Typography variant="body2" sx={sxStyles.body}>
              ネットイーグル株式会社で7年間セールスエンジニアを務め、現在は当スクールの講師をしています。
            </Typography>
            <Typography variant="body2" sx={sxStyles.body}>
              生徒一人ひとりのペースに合わせた丁寧な解説とコミュニケーションで、お子様の「自分で考える力」をプログラミングを通して引き出していきます！
            </Typography>
            <Typography sx={sxStyles.subTitle}>経歴・資格について</Typography>
            <List sx={sxStyles.list}>
              <ListItem>中部大学 工学部情報工学科卒</ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Teacher;
