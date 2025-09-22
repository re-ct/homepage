import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import pcImg from '../../public/image/top/img_pc.png';
import { contact } from '../lib/const/Link';

const Contact = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '80px 16px',
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', letterSpacing: '5px', fontSize: '40px' }}
      >
        お問い合わせ
      </Typography>
      <Typography
        variant="caption"
        align="center"
        component="span"
        sx={{
          fontSize: '17px',
          fontWeight: 'bold',
          letterSpacing: '3px',
          color: '#C2C2C2',
        }}
      >
        Contact
      </Typography>
      <Box
        mt={4}
        sx={{
          width: '100%',
          borderRadius: '8px',
          padding: '56px 40px',
          backgroundImage: `url(${pcImg.src})`,
          backgroundSize: '320px',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#DFF0FF',
          '@media screen and (max-width:600px)': {
            padding: '200px 24px 24px',
            backgroundPosition: 'center 42px',
            backgroundSize: '170px',
          },
        }}
      >
        <Link
          href={contact}
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            borderRadius: '50px',
            height: 'auto',
            py: 3,
            px: 8,
            backgroundColor: '#00298A',
            color: '#fff',
            fontSize: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            letterSpacing: '1px',
            display: 'inline-block',
            textAlign: 'center',
            '@media screen and (max-width:800px)': { px: 4, width: '100%' },
          }}
        >
          お問い合わせフォームへ
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
