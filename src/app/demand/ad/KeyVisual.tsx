import { Box, Typography } from '@mui/material';
import CustomButton from '../components/Button';
import { commonSxStyles } from '../components/Style';
import { contact } from '../../../lib/const/Link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import image from '../../../../public/image/demand/ad/advertise.json';

const sxStyles = {
  imageBox: {
    maxWidth: '414px',
    width: 'calc(100% - 485px)',
    aspectRatio: '1/1',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '@media screen and (max-width:768px)': {
      display: 'none',
    },
    '>div': {
      width: '200% !important',
      height: '100% !important',
      marginInline: 'auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  },
  subText: {
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
    }
  }
}


const KeyVisual = () => {
  return (
    <Box
      sx={{
        pt: 0,
        pb: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: '1000px',
          px: '20px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          rowGap: 3,
          columnGap: 1,
          minHeight: '414px',
          '@media screen and (max-width:768px)': {
            flexDirection: 'column',
            pt: 7,
            pb: 3,
          },
        }}
      >
        <Box
          sx={{
            '@media screen and (max-width:460px)': {
              textAlign: 'center',
              width: '100%',
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: '50px',
              letterSpacing: '0.04em',
              lineHeight: '1.4',
              fontWeight: 'bold',
              '@media screen and (max-width:768px)': {
                fontSize: 'clamp(34px, 9.06vw, 50px)',
                textAlign: 'center',
              },
            }}
          >
            クリックしたくなる
            <br />
            仕掛けを広告に。
          </Typography>
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography sx={[sxStyles.subText,commonSxStyles.typography.largeText]}>
              複雑な企画やデザインもプロにお任せ。
              <br />
              今すぐ使えるインタラクティブ広告を制作します。
            </Typography>
          </Box>
          <Box
            mt={4}
            sx={{
              width: '100%',
              '& > a': {
                '@media screen and (max-width:768px)': {
                  width: '100%',
                },
              },
            }}
          >
            <CustomButton
              label="お問い合わせ"
              icon="arrow-right"
              href={contact}
              isExternal={true}
              gaLabel="demand_contact_form_keyvisual"
            />
          </Box>
        </Box>
        <Box sx={sxStyles.imageBox}>
          <DotLottieReact
            data={image}
            autoplay
          />
        </Box>
      </Box>
    </Box>
  );
};
export default KeyVisual;
