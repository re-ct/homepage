import Heading2 from './components/Heading2';
import { Box, Typography } from '@mui/material';
import point1 from '../../../public/image/demand/point_image_01.webp';
import point2 from '../../../public/image/demand/point_image_02.webp';
import style1 from '../../../public/image/demand/point_icon_01.webp';
import style2 from '../../../public/image/demand/point_icon_02.webp';
import { commonSxStyles } from './components/Style';

const sxStyles = {
  title: {
    textAlign: 'center',
    mt: 2,
  },
  text: {
    '& + &': {
      mt: 1,
    },
  },
  list: {
    mt: 5,
    display: 'flex',
    gap: 4,
    listStyle: 'none',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '@media screen and (max-width:450px)': {
      flexDirection: 'column',
    },
  },
  listItem: {
    background: commonSxStyles.color.white,
    borderRadius: '20px',
    px: 4,
    pt: 5,
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0px 1px 6px rgba(34, 106, 170, 0.08)',
    width: '414px',
    maxWidth: '100%',
    '& > img': {
      maxWidth: '226px',
      height: 'auto',
      '@media screen and (max-width:450px)': {
        maxWidth: '190px',
      },
    },
    '&:before': {
      position: 'absolute',
      width: '47px',
      height: '59px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      top: '40px',
      left: '20px',
      content: '""',
      '@media screen and (max-width:450px)': {
        width: '39px',
        height: '49px',
        left: '32px',
      },
      '@media screen and (max-width:360px)': {
        left: '12px',
        top: '12px',
      },
    },
    '&:first-child': {
      '&:before': {
        backgroundImage: `url(${style1.src})`,
      },
    },
    '&:nth-child(2)': {
      '&:before': {
        backgroundImage: `url(${style2.src})`,
      },
    },
  },
};

const Point = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="point" mainText="サービスの特徴" />
        <Box component="ul" sx={sxStyles.list}>
          <Box component="li" sx={sxStyles.listItem}>
            <img src={point1.src} alt="" width="462" height="374" />
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.heading3]}
            >
              エンジニアが窓口で、
              <br />
              スムーズなやりとりを実現
            </Typography>
            <Box mt={2}>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                営業担当者ではなく、開発を行うエンジニアが直接ヒアリングから担当します。
              </Typography>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                これにより、お客様の要望を正確に把握し、技術的な要件をスムーズにすり合わせることが可能です。
              </Typography>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                専門用語は使わず、わかりやすく丁寧にご説明しますので、IT知識がなくてもご安心ください。
              </Typography>
            </Box>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <img src={point2.src} alt="" width="462" height="374" />
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.heading3]}
            >
              小さな案件・ご相談でも
              <br />
              歓迎します
            </Typography>
            <Box mt={2}>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                「Webサイトの一部だけ修正したい」といったご相談でも大歓迎です。
              </Typography>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                どんなに小さなご要望にも真摯に向き合い、お客様に寄り添った開発を心がけています。
              </Typography>
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                まずはお客様が抱えている「こんなことはできる？」という疑問を、ぜひお聞かせください。
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Point;
