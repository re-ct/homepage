import Heading2 from '../components/Heading2';
import CustomButton from '../components/Button';
import { Box, Typography } from '@mui/material';
import img from '../../../../public/image/demand/contact_image.webp';
import { commonSxStyles } from '../components/Style';
import { aiContact } from '@/lib/const/Link';

// 構成は ../components/Contact.tsx と同じ。見出し・本文・ボタンの文言がこのページ専用のため分けている
const sxStyles = {
  inner: {
    maxWidth: 'calc(100% - 320px)',
    '@media screen and (max-width:700px)': {
      maxWidth: '100%',
    },
  },
  text: {
    color: commonSxStyles.color.white,
    mt: 2,
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
    '& + &': {
      mt: 0,
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
      <Box sx={sxStyles.inner}>
        <Heading2
          subText="contact"
          mainText={
            <>
              まずは現在の業務や
              <br />
              お悩みをお聞かせください
            </>
          }
          position="right"
          backGroundWhite={false}
        />
        <Typography sx={[sxStyles.text, commonSxStyles.typography.normalText]}>
          何から始めればいいか分からなくても問題ございません。
        </Typography>
        <Typography sx={[sxStyles.text, commonSxStyles.typography.normalText]}>
          課題やご予算に合わせて、AIでできることを一緒に考えます。
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
            label="AI導入について相談する"
            isPrimary={false}
            showFreeLabel={false}
            icon="arrow-right"
            href={aiContact}
            isExternal={true}
            gaLabel="demandAi_contact_form_contact"
          />
        </Box>
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
