'use client';
import { Box, Typography } from '@mui/material';
import { careerBusinessContact } from '../../../lib/const/Link';
import { commonSxStyles } from '../components/Style';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomButton from '../components/Button';

const sxStyles = {
  section: {
    background: 'linear-gradient(to right, #407BFF 0%, #012D97 100%)',
    paddingBlock: '50px 70px',
  },
  wrap: {
    maxWidth: '932px',
    paddingInline: '16px',
    marginInline: 'auto',
    textAlign: 'center',
    color: commonSxStyles.color.white,
  },
  button: {
    marginTop: '32px',
  },
  text: {
    fontWeight: 'bold',
    marginTop: '12px',
  },
};

const Contact = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.wrap}>
        <Typography
          variant="h2"
          component="h2"
          sx={commonSxStyles.typography.heading2}
        >
          まずはお気軽に{isSmallScreen && <br />}ご相談ください
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={[commonSxStyles.typography.normalText, sxStyles.text]}
        >
          エンジニア採用のお悩み・情報収集など、{isSmallScreen && <br />}
          ライトなご相談も大歓迎です。
        </Typography>
        <Box sx={sxStyles.button}>
          <CustomButton
            label="お問い合わせはこちら"
            variant="primary"
            icon="keyboard-arrow-right"
            href={careerBusinessContact}
            isExternal={true}
            showFreeLabel={false}
            gaLabel="careerForBusiness_request_contact"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
