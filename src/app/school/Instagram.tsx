'use client';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import headingInstagramImg from '../../../public/image/school/heading_instagram.png';
import instagramImg from '../../../public/image/school/instagram_icon.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const sxStyles = {
  headingInstagram: {
    marginInline: '24px',
    mt: 8,
    '& > img': {
      width: '267px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        maxWidth: '215px',
        width: '100%',
      },
    },
  },
  subButton: {
    fontSize: 18,
    fontWeight: 'bold',
    py: 2,
    borderRadius: 60,
    color: '#333',
    border: 'solid 1px #333',
    width: '400px',
    mt: 4,
    background: '#fff',
    textTransform: 'none',
    '&:hover': {
      bgcolor: 'rgba(0,0,0,0.1)',
    },
    '@media screen and (max-width:450px)': {
      width: '100%',
    },
  },
  information: {
    mx: 'auto',
    my: 9,
    width: '100%',
    maxWidth: '800px',
    '@media screen and (max-width:450px)': {
      width: '100%',
      px: 3,
    },
  },
};

const Instagram = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.information}>
      <Typography variant="h2" sx={sxStyles.headingInstagram}>
        <img
          src={headingInstagramImg.src}
          alt="公式Instagram"
          width="528"
          height="84"
        />
      </Typography>
      <Typography variant="body2" color="#333" fontWeight="bold" mt={2}>
        教室のお知らせや、{isSmallScreen && <br />}
        プログラミングに関する情報をお届けしています。
      </Typography>
      <Button
        sx={sxStyles.subButton}
        variant="contained"
        size="large"
        fullWidth={true}
        href="https://www.instagram.com/repros_programming/"
      >
        <img
          src={instagramImg.src}
          alt="instagramのリンク"
          width="24"
          height="24"
          style={{ marginRight: '8px' }}
        />
        @repros_programming
      </Button>
    </Box>
  );
};

export default Instagram;
