import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingCtaImg from '../../../public/image/school/heading_achievementList.png';
import { commonSxStyles } from './components/Style';

const sxStyles = {
  contents: {
    overflow: 'hidden',
  },
  contentsWrap: {
    paddingTop: '50px',
    display: 'grid',
    gridTemplateColumns: '170px 1fr',
    maxWidth: '900px',
    marginInline: 'auto',
    columnGap: '40px',
    '@media screen and (max-width:450px)': {
      gridTemplateColumns: '1fr',
      columnGap: 0,
    }
  },
  heading: {
    display: 'flex',
    alignItem: 'flex-start',

    '& > img': {
      width: '134px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '134px',
      },
    },
  },
  photos: {
    display: 'flex',
    gap: 2,
    px: 2,
    justifyContent: 'flex-start',
    overflow: 'scroll',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    maxWidth: '100%',
    width: 'max-content',
    mx: 'auto',
    overflowY: 'hidden',
    '@media screen and (max-width:450px)': {
      marginTop: '40px',
    }
  },
  list: {
    borderRadius: '8px',
    border: 'solid 1px #956A1D',
    overflow: 'hidden',
    minWidth: '250px',
    maxWidth: '250px',
    '@media screen and (max-width:450px)': {
      minWidth: '210px',
      maxWidth: '210px',
    },
    '& > img': {
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom',
    },
  },
  wrap: {
    marginTop: '12px',
    marginBlock: '16px',
    paddingInline: '12px',
    textAlign: 'left',
  },
  date: {
    fontSize: '12px',
    color: commonSxStyles.color.Gray[700],
  },
  grade: {
    fontSize: '14px',
    marginTop: '4px',
    '& > span': {
      fontSize: '12px',
    }
  },
  member: {
    fontSize: '12px',
    marginTop: '4px',
    color: commonSxStyles.color.Gray[700],
  },
  headingText: {
    marginTop: '12px',
    textAlign: 'left',
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
    '& br': {
      '@media screen and (max-width:450px)': {
        display: 'none',
      }
    }
  }
};

export type members = {
  id: string | number;
  src: string;
  examination: string;
  date: string;
  grade: string;
  member: string;
}

const members: members[] = [
  {
    id: '1',
    src: 'image_achievementList1.webp',
    date: '2025年5月',
    examination: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    member: '御油小学校 5年生',
  },
  {
    id: '2',
    src: 'image_achievementList2.webp',
    date: '2025年5月',
    examination: 'ジュニアプログラミング検定',
    grade: 'エントリー級',
    member: '前芝小学校 6年生',
  },
  {
    id: '3',
    src: 'image_achievementList2.webp',
    date: '2025年5月',
    examination: 'ジュニアプログラミング検定',
    grade: 'エントリー級',
    member: '前芝小学校 6年生',
  },
  {
    id: '4',
    src: 'image_achievementList2.webp',
    date: '2025年12月',
    examination: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    member: '御津南部小学校 5年生',
  },
  {
    id: '5',
    src: 'image_achievementList2.webp',
    date: '2025年12月',
    examination: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    member: '御津南部小学校 5年生',
  },
  {
    id: '6',
    src: 'image_achievementList2.webp',
    date: '2025年12月',
    examination: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    member: '御津南部小学校 4年生',
  },
  {
    id: '7',
    src: 'image_achievementList2.webp',
    date: '2025年12月',
    examination: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    member: '御油小学校 5年生',
  },
  {
    id: '8',
    src: 'image_achievementList2.webp',
    date: '2025年12月',
    examination: 'ジュニアプログラミング検定',
    grade: 'エントリー級',
    member: '小坂井西小学校 2年生',
  },
];

const AchievementList = () => {
  return (
    <Box sx={sxStyles.contents}>
      <Box sx={sxStyles.contentsWrap}>
        <Box>
          <Typography variant="h2" sx={sxStyles.heading}>
            <img src={headingCtaImg.src} alt="合格実績" width="532" height="122" />
          </Typography>
          <Typography variant="body2" sx={[sxStyles.headingText,commonSxStyles.typography.normalText]}>開校以来、<br/>合格率100%を継続中！</Typography>
        </Box>
        <Box sx={sxStyles.photos}>
          {[...members].reverse().map((image, index) => (
            <Box sx={sxStyles.list} key={index}>
              <img src={`../../../image/school/${image.src}`} alt="" width="300" height="200" />
              <Box sx={sxStyles.wrap}>
                <Typography variant="body2" sx={sxStyles.date}>
                  {image.date}
                </Typography>
                <Typography variant="body2" sx={sxStyles.grade}>
                  <span>{image.examination}</span><br/>
                  {image.grade}
                </Typography>
                <Typography variant="body2" sx={sxStyles.member}>
                  {image.member}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AchievementList;
