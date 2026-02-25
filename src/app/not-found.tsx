import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CommonLink } from '../components/CommonLink';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const metadata = {
  title: '404 - お探しのページが見つかりません | 株式会社レクト',
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    lineHeight: '1.4',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
};

export default function NotFound() {
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
          お探しのページが見つかりません
        </Typography>
        <Typography sx={sxStyles.text}>
          アクセスしようとしたページは削除されたか、アドレスが変更された可能性があります。
        </Typography>
        <CommonLink
          link={{
            href: `/`,
            external: false,
          }}
          style={{
            backgroundColor: '#00298A',
            textTransform: 'none',
            padding: '16px 20px 16px 20px',
            borderRadius: '50px',
            boxShadow: 'none',
            minWidth: '283px',
            width: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: '10px',
            transition: 'filter 0.3s',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 'bold',
            marginTop: '72px',
          }}
        >
          サイトトップへ戻る
          <ArrowForwardIcon />
        </CommonLink>
      </Box>
    </main>
  );
}
