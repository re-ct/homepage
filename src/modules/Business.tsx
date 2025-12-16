import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MediaCard from '../components/MediaCard';
import Grid from '@mui/material/Grid';
import computerImg from '../../public/image/top/service_programming.png';
import soudanImg from '../../public/image/top/service_soudan.png';

const Business = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        background: '#00298A',
        padding: '80px 16px',
      }}
    >
      <Box
        component="section"
        sx={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '5px',
            fontSize: '40px',
            color: '#E9EFFF',
          }}
        >
          事業内容
        </Typography>
        <Typography
          variant="caption"
          align="left"
          component="span"
          sx={{
            fontSize: '17px',
            fontWeight: 'bold',
            letterSpacing: '3px',
            color: '#7994D5',
          }}
        >
          Service
        </Typography>
        <Grid container style={{ marginTop: 40, gap: '52px 24px' }}>
          <Grid
            sx={{
              width: 'calc(50% - 12px)',
              '@media screen and (max-width:500px)': { width: '100%' },
            }}
          >
            <MediaCard
              heading="プログラミング教室"
              text="学生向けのプログラミングスクール"
              href="/school"
              imgSrc={computerImg.src}
              imgAlt="プログラミング教室"
            />
          </Grid>
          <Grid
            sx={{
              width: 'calc(50% - 12px)',
              '@media screen and (max-width:500px)': { width: '100%' },
            }}
          >
            <MediaCard
              heading="開発等の相談"
              text="どんな案件でもまずはご相談ください！"
              href="/demand"
              imgSrc={soudanImg.src}
              imgAlt="開発の相談"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Business;
