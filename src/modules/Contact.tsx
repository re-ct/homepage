import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Lato } from 'next/font/google';
import { contact } from '../lib/const/Link';
import { CommonLink } from '../components/CommonLink';
import FadeInOnView from '../components/FadeInOnView';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const sxStyles = {
  section: {
    width: '100%',
    margin: '0 auto',
    padding: '80px 20px 90px',
    backgroundColor: '#EFF7FF',
  },
  wrap: {
    maxWidth: '1032px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      padding: 0,
    },
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  heading: {
    fontFamily: lato.style.fontFamily,
    fontWeight: '900',
    fontSize: '65px',
    color: '#00298A',
    letterSpacing: '0.02em',
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
      fontSize: '52px',
    },
  },
  text: {
    fontSize: '16px',
    color: '#000',
    letterSpacing: '0.02em',
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
    },
  },
  link: {
    width: '390px',
    '@media screen and (max-width:768px)': {
      width: '100%',
    },
    '> a': {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '6px',
      height: 'auto',
      py: '20px',
      px: 8,
      backgroundColor: '#00298A',
      color: '#fff',
      border: 'solid 1px #00298A',
      fontSize: '20px',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.35s ease, color 0.35s ease',
      '@media screen and (max-width:768px)': {
        px: '16px',
        width: '100%',
      },
      '&:hover': {
        backgroundColor: '#fff',
        color: '#00298A',
      },
    },
  },
  linkIcon: {
    fontSize: '24px',
    color: 'inherit',
  },
};

const Contact = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.wrap}>
          <Box sx={sxStyles.headingContainer}>
            <Typography variant="h2" sx={sxStyles.heading}>
              Contact
            </Typography>
            <Typography variant="body2" sx={sxStyles.text}>
              お問い合わせはこちらよりお願いいたします
            </Typography>
          </Box>
          <Box sx={sxStyles.link}>
            <CommonLink
              link={{
                href: contact,
                external: true,
              }}
            >
              お問い合わせフォームへ
              <ArrowForwardIcon sx={sxStyles.linkIcon} />
            </CommonLink>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};

export default Contact;
