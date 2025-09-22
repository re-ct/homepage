import Heading2 from './components/Heading2';
import CustomButton from './components/Button';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from './components/Style';

const sxStyles = {
  text: {
    textAlign: 'center',
    mt: 4,
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

const Company = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="company" mainText="会社概要" />
        <Typography sx={[sxStyles.text, commonSxStyles.typography.normalText]}>
          「社会のコミュニケーションを、
          <br />
          ITの力でもっと活発に」
        </Typography>
        <Typography sx={[sxStyles.text, commonSxStyles.typography.normalText]}>
          株式会社レクトは、情報通信サービスの
          <br />
          開発・運営を行っている会社です。
        </Typography>
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            '& > a': {
              '@media screen and (max-width:450px)': {
                width: '100%',
              },
            },
          }}
        >
          <CustomButton
            label="会社概要を見る"
            showFreeLabel={false}
            icon="new-tab"
            href="/"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Company;
