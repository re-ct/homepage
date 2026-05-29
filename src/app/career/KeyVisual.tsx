'use client';
import { Box, Typography } from '@mui/material';
import { careerContact } from '../../lib/const/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { commonSxStyles } from './components/Style';
import CustomButton from './components/Button';

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
    marginTop: '38px',
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
        <Box sx={sxStyles.button}>
          <CustomButton
            label="相談に申し込む"
            variant="primary"
            icon="keyboard-arrow-right"
            href={careerContact}
            isExternal={true}
            gaLabel="career_request_keyVisual"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default KeyVisual;
