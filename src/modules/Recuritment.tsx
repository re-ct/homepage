import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import handImg from '../../public/image/top/img_hand.png';

const Recruitment = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '932px',
        width: '100%',
        margin: '0 auto',
        padding: '80px 16px',
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', letterSpacing: '0.1em', fontSize: '40px' }}
      >
        採用情報
      </Typography>
      <Typography
        variant="caption"
        align="left"
        component="span"
        sx={{
          fontSize: '17px',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          color: '#C2C2C2',
        }}
      >
        Recruit
      </Typography>
      <Box
        mt={4}
        sx={{
          width: '100%',
          borderRadius: '8px',
          padding: '56px 40px',
          backgroundImage: `url(${handImg.src})`,
          backgroundSize: '320px',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#DFF0FF',
          '@media screen and (max-width:600px)': {
            padding: '72px 24px 120px',
            backgroundPosition: 'center bottom',
            backgroundSize: '220px',
            textAlign: 'center',
          },
        }}
      >
        <Typography
          variant="caption"
          component="p"
          sx={{
            borderRadius: '50px',
            height: 'auto',
            py: 3,
            px: 8,
            color: '#333',
            fontSize: '20px',
            textDecoration: 'none',
            letterSpacing: '1px',
            display: 'inline-block',
            '@media screen and (max-width:800px)': {
              padding: '0',
              height: 'auto',
            },
          }}
        >
          現在、募集しておりません
        </Typography>
      </Box>
    </Box>
  );
};

export default Recruitment;
