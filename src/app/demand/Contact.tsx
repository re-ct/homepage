import Heading2 from './components/Heading2';
import CustomButton from './components/Button';
import { Box, Typography } from '@mui/material';
import img from '../../../public/image/demand/contact_image.webp';
import { commonSxStyles } from './components/Style';
import { contact } from '../../lib/const/Link';

const sxStyles = {
  text: {
    color: commonSxStyles.color.white,
    mt: 2,
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
    '& + &': {
      mt: 1,
    },
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
};

const Contact = () => {
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        width: 'calc(100% - 40px)',
        mx: 'auto',
        backgroundColor: commonSxStyles.color.primary,
        borderRadius: '20px',
        px: 7,
        pt: 7,
        pb: 8,
        my: 7,
        position: 'relative',
        '@media screen and (max-width:450px)': {
          mx: 2.5,
          pt: 5,
          pb: 6,
          px: 2.5,
        },
      }}
    >
      <Heading2
        subText="contact"
        mainText="お問い合わせ"
        position="right"
        backGroundWhite={false}
      />
      <Typography sx={[sxStyles.text, commonSxStyles.typography.normalText]}>
        相談は無料です。小さなことでも、
        <br />
        お気軽にご連絡ください。
      </Typography>
      <Box
        sx={{
          mt: 4,
          '@media screen and (max-width:450px)': {
            mt: 3,
          },
          '& > a': {
            '@media screen and (max-width:450px)': {
              width: '100%',
            },
          },
        }}
      >
        <CustomButton
          label="お問い合わせフォームへ"
          variant="secondary"
          showFreeLabel={false}
          icon="arrow-right"
          href={contact}
          isExternal={true}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '60px',
          '& > img': {
            maxWidth: '284px',
            height: 'auto',
            '@media screen and (max-width:700px)': {
              display: 'none',
            },
          },
        }}
      >
        <img src={img.src} alt="" width="570" height="434" />
      </Box>
    </Box>
  );
};
export default Contact;
