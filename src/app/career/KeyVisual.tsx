'use client';
import { Button, Box, Typography } from '@mui/material';
import { careerContact } from '../../lib/const/Link';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { commonSxStyles } from './components/Style';

const sxStyles = {
  wrap: {
    background:
      'linear-gradient(to right, rgba(64, 123, 255, 0.9) 0%, rgba(1, 45, 151, 0.9) 100%), url("../../../../../image/career/key_visual_background.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    paddingBlock: '74px 57px',
    '@media screen and (max-width:768px)': {
      background:
        'linear-gradient(to right, rgba(64, 123, 255, 0.9) 0%, rgba(1, 45, 151, 0.9) 100%), url("../../../../../image/career/key_visual_background_sp.webp")',
      paddingBlock: '80px',
      backgroundSize: 'cover',
    },
  },
  contents: {
    maxWidth: 'calc(1000px + 32px)',
    px: 2,
    mx: 'auto',
    color: commonSxStyles.color.white,
    textShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
    },
  },
  subCopy: {
    fontSize: 'min(1.38vw, 20px)',
    fontWeight: 'bold',
    letterSpacing: '0.07em',
    '@media screen and (max-width:768px)': {
      fontSize: 'min(4.6vw,18px)',
    },
  },
  mainCopy: {
    fontSize: 'min(2.77vw, 40px)',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    fontFamily: 'Arial,Roboto,Roboto Fallback,sans-serif',
    mt: '11px',
    lineHeight: '1.5',
    '@media screen and (max-width:768px)': {
      fontSize: 'min(8.2vw,32px)',
      mt: 2,
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
  },
  free: {
    borderRadius: '4px',
    px: '6px',
    py: '2px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: commonSxStyles.color.white,
    color: commonSxStyles.color.accent,
  },
};

const KeyVisual = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={sxStyles.wrap}>
      <Box sx={sxStyles.contents}>
        <Typography sx={sxStyles.subCopy}>
          エンジニアのお悩みを無料でサポート
        </Typography>
        <Typography sx={sxStyles.mainCopy}>
          キャリアのモヤモヤ
          <br />
          現役エンジニアと{isSmallScreen && <br />}話してみませんか
        </Typography>
        <Button
          variant="contained"
          href={careerContact}
          rel="noopener noreferrer"
          target="_blank"
          sx={sxStyles.button}
          endIcon={<KeyboardArrowRight />}
        >
          <Typography component="span" sx={sxStyles.free}>
            無料
          </Typography>
          相談に申し込む
        </Button>
      </Box>
    </Box>
  );
};
export default KeyVisual;
