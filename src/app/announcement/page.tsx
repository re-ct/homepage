import '../globals.css';
import Box from '@mui/material/Box';
import Post from './Post';
import { Typography } from '@mui/material';

export const metadata = {
  title: '電子公告 | 株式会社レクト',
  description: '株式会社レクトの電子公告に関する資料をご覧いただけます。',
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
};

const Announcement = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '100px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          電子公告
        </Typography>
        <Post />
      </Box>
    </main>
  );
};

export default Announcement;
