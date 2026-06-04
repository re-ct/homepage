import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Lato } from 'next/font/google';
import { contact } from '../lib/const/Link';
import { CommonLink } from '../components/CommonLink';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const sxStyles = {
  section: {
    width: '100%',
    margin: '0 auto',
    padding: '60px 20px 70px',
    backgroundColor: '#EFF7FF',
  },
  wrap: {
    maxWidth: '932px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  heading: {
    fontFamily: lato.style.fontFamily,
    fontWeight: '900',
    fontSize: '52px',
    color: '#00298A',
    letterSpacing: '0.02em',
  },
  text: {
    fontSize: '16px',
    color: '#000',
    letterSpacing: '0.02em',
  },
  link: {
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
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: '#fff',
      transform: 'translateX(-101%)',
      transition: 'transform 0.35s ease',
      zIndex: 0,
    },
    '&:has(a:hover)': {
      '&::before': {
        transform: 'translateX(0)',
      },
      '& span': {
        color: '#00298A',
      },
    },
  },
  linkContent: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#fff',
    transition: 'color 0.35s ease',
  },
  linkIcon: {
    fontSize: '24px',
    color: 'inherit',
  },
};

const Contact = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
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
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box component="span" sx={sxStyles.linkContent}>
              お問い合わせフォームへ
              <ArrowForwardIcon sx={sxStyles.linkIcon} />
            </Box>
          </CommonLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
