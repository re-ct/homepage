'use client';
import { Box, Typography } from '@mui/material';
import { careerBusinessContact } from '../../../lib/const/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { commonSxStyles } from '../components/Style';
import CustomButton from '../components/Button';

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
      paddingInline: '16px',
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
        fontSize: 'min(8.47vw, 36px)',
      },
    },
    '@media screen and (max-width:768px)': {
      fontSize: 'min(8.47vw, 36px)',
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
    marginTop: '38px',
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
        <Box sx={sxStyles.button}>
          <CustomButton
            label="お問い合わせ"
            variant="primary"
            icon="keyboard-arrow-right"
            href={careerBusinessContact}
            isExternal={true}
            showFreeLabel={false}
            gaLabel="careerForBusiness_request_keyVisual"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default KeyVisual;
