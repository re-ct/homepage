'use client';
import { Box, Typography } from '@mui/material';
import { careerContact } from '../../lib/const/Link';
import { commonSxStyles } from './components/Style';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomButton from './components/Button';

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
    marginTop: '38px',
  },
  free: {
    borderRadius: '4px',
    px: '6px',
    py: '2px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: commonSxStyles.color.white,
    color: commonSxStyles.color.accent,
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
          ご相談の受付
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={[commonSxStyles.typography.normalText, sxStyles.text]}
        >
          ご相談いただいた内容や、{isSmallScreen && <br />}
          個人情報、現職での状況は
          <br />
          ご本人様の許可なく第三者（企業含む）に{isSmallScreen && <br />}
          口外することは一切ありません。{isSmallScreen && <br />}
          安心してご相談ください。
        </Typography>
        <Box sx={sxStyles.button}>
          <CustomButton
            label="相談フォームへ"
            variant="primary"
            icon="keyboard-arrow-right"
            href={careerContact}
            isExternal={true}
            gaLabel="career_request_contact"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
