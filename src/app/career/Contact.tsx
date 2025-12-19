'use client';
import { Button, Box, Typography } from '@mui/material';
import { careerContact } from '../../lib/const/Link';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { commonSxStyles } from './components/Style';
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
    color: '#fff',
  },
  button: {
    backgroundColor: '#EF6C00',
    color: '#fff',
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
    marginTop: '38px',
    '&:hover': {
      boxShadow: 'none',
      filter: 'brightness(0.8)',
    },
  },
  text: {
    fontWeight: 'bold',
    marginTop: '12px',
  }
};

const Contact = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.wrap}>
        <Typography
        variant="h2"
        component="h2"
        sx={commonSxStyles.typography.heading2}>ご相談の受付</Typography>
        <Typography variant="body2"
        component="p"
        sx={[commonSxStyles.typography.normalText,sxStyles.text]}>ご相談いただいた内容や、{isSmallScreen && <br />}個人情報、現職での状況は<br/>ご本人様の許可なく第三者（企業含む）に{isSmallScreen && <br />}口外することは一切ありません。{isSmallScreen && <br />}安心してご相談ください。</Typography>
        <Button
          variant="contained"
          href={careerContact}
          rel='noopener noreferrer'
          target='_blank'
          sx={sxStyles.button}
          endIcon={<KeyboardArrowRight />}
        >
          無料 相談フォームへ
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
