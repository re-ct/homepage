'use client';
import { Button, Box, Typography } from '@mui/material';
import { careerBusinessContact } from '../../../lib/const/Link';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { commonSxStyles } from '../components/Style';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    marginTop: '32px',
    gap: '8px',
    '&:hover': {
      boxShadow: 'none',
      filter: 'brightness(0.8)',
    },
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
        <Button
          variant="contained"
          href={careerBusinessContact}
          rel="noopener noreferrer"
          target="_blank"
          sx={sxStyles.button}
          endIcon={<KeyboardArrowRight />}
        >
          お問い合わせはこちら
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
