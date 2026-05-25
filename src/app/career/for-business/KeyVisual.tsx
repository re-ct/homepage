'use client';
import { Button, Box, Typography } from '@mui/material';
import { careerContact } from '../../../lib/const/Link';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { commonSxStyles } from '../components/Style';

const sxStyles = {
  wrap: {
    background:
      'linear-gradient(to right, rgba(64, 123, 255, 0.9) 0%, rgba(1, 45, 151, 0.9) 100%)',
    paddingBlock: '74px 54px',
    position: 'relative',
    overflow: 'hidden',
    '@media screen and (max-width:768px)': {
      background:
        'linear-gradient(to right, rgba(64, 123, 255, 0.9) 0%, rgba(1, 45, 151, 0.9) 100%)',
      paddingBlock: '72px',
    },
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      maxWidth: '329px',
      minWidth: '329px',
      aspectRatio: '329/198',
      backgroundImage: 'url("../../../../../image/career/background_code.svg")',
      display: 'inline-block',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      '@media screen and (max-width:768px)': {
        maxWidth: '282px',
        minWidth: '282px',
      },
    },
    '&::before': {
      top: '64px',
      left: '-59px',
      '@media screen and (max-width:768px)': {
        top: 'auto',
        bottom: '8px',
        left: '-128px',
      },
    },
    '&::after': {
      top: '75px',
      right: '-59px',
      transform: 'scaleX(-1)',
      '@media screen and (max-width:768px)': {
        top: '26px',
        right: '-135px',
      },
    },
  },
  contents: {
    maxWidth: 'calc(1000px + 32px)',
    px: 2,
    mx: 'auto',
    color: commonSxStyles.color.white,
    textShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
    '@media screen and (max-width:768px)': {
      textAlign: 'left',
    },
  },
  mainCopy: {
    fontSize: '52px',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    fontFamily: 'Arial,Roboto,Roboto Fallback,sans-serif',
    lineHeight: '1.5',
    '& > span': {
      fontSize: '44px',
      '@media screen and (max-width:768px)': {
        fontSize: '36px',
      },
    },
    '@media screen and (max-width:768px)': {
      fontSize: '36px',
    },
  },
  subCopy: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    fontFamily: 'Arial,Roboto,Roboto Fallback,sans-serif',
    mt: '13px',
    lineHeight: '1.5',
    '& > span': {
      fontSize: '16px',
    },
    '@media screen and (max-width:768px)': {
      fontSize: '16px',
    },
  },
  button: {
    backgroundColor: commonSxStyles.color.accent,
    color: commonSxStyles.color.white,
    textTransform: 'none',
    padding: '16px 20px 16px 25px',
    borderRadius: '50px',
    boxShadow: 'none',
    width: '300px',
    maxWidth: '100%',
    transition: 'filter 0.3s',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '0.06em',
    marginTop: '38px',
    gap: '8px',
    '&:hover': {
      boxShadow: 'none',
      filter: 'brightness(0.8)',
    },
    '@media screen and (max-width:768px)': {
      width: '100%',
    },
  },
};

const KeyVisual = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={sxStyles.wrap}>
      <Box sx={sxStyles.contents}>
        <Typography sx={sxStyles.mainCopy}>
          ITエンジニア採用<span>を</span>
          {isSmallScreen && <br />}より確実に。
        </Typography>
        <Typography sx={sxStyles.subCopy}>
          現役エンジニア<span>が</span>
          {isSmallScreen && <br />}スクリーニングした人材のみ<span>を、</span>
          <br />
          完全成功報酬<span>で</span>ご紹介いたします。
        </Typography>
        <Button
          variant="contained"
          href={careerContact}
          rel="noopener noreferrer"
          target="_blank"
          sx={sxStyles.button}
          endIcon={<KeyboardArrowRight />}
        >
          お問い合わせ
        </Button>
      </Box>
    </Box>
  );
};
export default KeyVisual;
