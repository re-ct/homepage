'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import fvLarge from '../../../public/image/school/fv_large.png';
import fvSmall from '../../../public/image/school/fv_small.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const sxStyles = {
  wrap: {
    background: 'linear-gradient(to right, #0E4FE0 50%, #407BFF 50%)',
    position: 'relative',
    '@media screen and (max-width:450px)': {
      position: 'static',
      background: '#01329F',
    },
  },
  keyVisualLarge: {
    background: `url(${fvLarge.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    maxWidth: '900px',
    height: '352px',
    marginInline: 'auto',
    '@media screen and (max-width:450px)': {
      display: 'none',
    },
  },
  keyVisualSmall: {
    display: 'none',
    '@media screen and (max-width:450px)': {
      display: 'block',
      background: `url(${fvSmall.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '342px',
      textAlign: 'left',
      position: 'relative',
    },
  },
  headingWrap: {
    textAlign: 'left',
    position: 'absolute',
    top: '60px',
    '@media screen and (max-width:450px)': {
      bottom: '8px',
      top: 'auto',
    },
    '& > img:first-of-type': {
      width: '94px',
      height: 'auto',
      position: 'absolute',
      top: '-38px',
      '@media screen and (max-width:450px)': {
        top: '-41px',
        transform: 'rotate(-7deg)',
        width: '87px',
        marginLeft: '-13px',
      },
    },
  },
  subHeading: {
    color: '#fff',
    fontSize: '19px',
    marginTop: '8px',
    '@media screen and (max-width:450px)': {
      marginTop: 0,
      marginLeft: '16px',
      fontSize: '15px',
    },
  },
  heading: {
    lineHeight: 1.8,
    marginTop: '8px',
    width: '453px',
    '@media screen and (max-width:450px)': {
      marginTop: '4px',
      marginLeft: '16px',
      width: 'calc(100% - 16px)',
    },
    '& span': {
      background: '#fff',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      color: '#00319F',
      fontSize: '32px',
      lineHeight: 1,
      padding: '8px',
      fontWeight: 'bold',
      display: 'inline-block',
      '@media screen and (max-width:450px)': {
        fontSize: '6.5vw',
        fontWeight: '900',
      },
      '& + span': {
        marginTop: '8px',
      },
    },
  },
  text: {
    color: '#fff',
    position: 'absolute',
    bottom: '34px',
    maxWidth: '900px',
    width: '100%',
    marginInline: 'auto',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'left',
    '@media screen and (max-width:450px)': {
      paddingBottom: '20px',
      background: '#01329F',
      paddingLeft: '16px',
      paddingTop: '8px',
      width: '100%',
      position: 'static',
      transform: 'none',
    },
  },
};

const KeyVisual = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <>
      <Box sx={sxStyles.wrap}>
        <Box
          sx={isSmallScreen ? sxStyles.keyVisualSmall : sxStyles.keyVisualLarge}
        >
          <Box sx={sxStyles.headingWrap}>
            <img
              src="../../../image/school/fv_balloon.png"
              alt="豊川で"
              width="145"
              height="101"
            />
            <Typography
              variant="body2"
              fontWeight="900"
              sx={sxStyles.subHeading}
            >
              とにかく楽しんで！気づいたら
            </Typography>
            <Typography variant="body2" sx={sxStyles.heading}>
              <Typography component="span" variant="body2" fontWeight="900">
                プログラミングが
              </Typography>
              <Typography component="span" variant="body2" fontWeight="900">
                できるようになっている教室
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.text}>
          <Typography variant="body2" style={{ lineHeight: '1.8' }}>
            <Typography component="span" variant="body2" fontWeight="bold">
              現役エンジニア
            </Typography>
            が低価格で教えます！
          </Typography>
          <Typography variant="body2" style={{ lineHeight: '1.8' }}>
            個人の学びがより深まる
            <Typography component="span" variant="body2" fontWeight="bold">
              少人数での教室
            </Typography>
            で{isSmallScreen && <br />}
            プログラミングを学びませんか？
          </Typography>
          <Typography
            variant="body2"
            style={{ lineHeight: '1.8', marginTop: '6px' }}
          >
            とにかく楽しく学ぶをモットーに{isSmallScreen && <br />}
            全力でお子様のサポートをいたします！
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default KeyVisual;
