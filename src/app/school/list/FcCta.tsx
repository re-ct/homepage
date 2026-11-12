import { Box, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CommonLink } from '@/components/CommonLink';
import { commonSxStyles } from '../components/Style';

const sxStyles = {
  section: {
    pt: 7,
    pb: 10,
    px: 3,
    backgroundColor: commonSxStyles.color.primary[400],
  },
  card: {
    maxWidth: '900px',
    mx: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gridTemplateAreas: "'text image' 'button image'",
    columnGap: 5,
    p: 4,
    border: `solid 1px ${commonSxStyles.color.Gray[200]}`,
    borderRadius: '12px',
    backgroundColor: commonSxStyles.color.white,
    textAlign: 'left',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: "'text' 'image' 'button'",
      rowGap: 3,
      p: 3,
    },
  },
  // PC ではテキストとボタンを、写真の高さの中で上下中央にまとめる
  textWrap: {
    gridArea: 'text',
    alignSelf: 'end',
    '@media screen and (max-width:768px)': {
      alignSelf: 'auto',
    },
  },
  label: {
    fontFamily: 'Arial,sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    color: commonSxStyles.color.primary[900],
  },
  heading: {
    mt: 1,
    fontSize: '24px',
    color: commonSxStyles.color.black,
  },
  text: {
    mt: 1,
    color: commonSxStyles.color.black,
    '& > strong': {
      fontWeight: 'bold',
    },
    '& > br': {
      '@media screen and (max-width:450px)': {
        display: 'none',
      },
    },
  },
  // ヘッダーの「無料体験受付中」ボタンの形を大きくしたもの
  button: {
    gridArea: 'button',
    alignSelf: 'start',
    mt: 3,
    '@media screen and (max-width:768px)': {
      alignSelf: 'auto',
      mt: 0,
    },
    '& > a': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      py: 1.5,
      px: 3.5,
      borderRadius: '50px',
      backgroundColor: commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.white,
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      transition: 'filter 0.3s',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
      '@media screen and (max-width:450px)': {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      },
    },
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  image: {
    gridArea: 'image',
    alignSelf: 'center',
    width: '100%',
    aspectRatio: '4 / 3',
    borderRadius: '8px',
    overflow: 'hidden',
    '& > img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
};

const FcCta = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <Box sx={sxStyles.card}>
        <Box sx={sxStyles.textWrap}>
          <Typography component="p" sx={sxStyles.label}>
            FOR PARTNERS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={[commonSxStyles.typography.heading3, sxStyles.heading]}
          >
            あなたの地域で
            <br />
            プログラミング教室を始めませんか？
          </Typography>
          <Typography
            component="p"
            sx={[sxStyles.text, commonSxStyles.typography.normalText]}
          >
            Re:ProSでは、子ども向けプログラミング教室の
            <br />
            <strong>フランチャイズパートナーを募集</strong>しています。
            <br />
            子どもたちにプログラミングの楽しさを伝える教室を始めてみませんか？
          </Typography>
        </Box>
        <Box sx={sxStyles.button}>
          <CommonLink
            link={{ href: '/school/fc/', external: false }}
            gaLabel="schoolList_fc_cta"
          >
            詳細はこちら
            <PlayCircleIcon />
          </CommonLink>
        </Box>
        <Box sx={sxStyles.image}>
          <img
            src="/image/school/fc_cta.png"
            alt="Re:ProSの教室で子どもがプログラミングを学ぶ様子"
            width="600"
            height="450"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FcCta;
