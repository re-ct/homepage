import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from '../../public/image/top/recruit_pc.webp';
import { Lato } from 'next/font/google';
import Image from 'next/image';
import FadeInOnView from '../components/FadeInOnView';

const lato = Lato({
  weight: ['900'],
  subsets: ['latin'],
  display: 'swap',
});

const sxStyles = {
  section: {
    maxWidth: '1032px',
    width: '100%',
    margin: '0 auto',
    padding: '0 16px 100px',
  },
  headingBox: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  heading: {
    fontFamily: lato.style.fontFamily,
    fontWeight: '900',
    fontSize: '65px',
    color: '#000000',
    letterSpacing: '0.02em',
    lineHeight: '1',
    '@media screen and (max-width:768px)': {
      fontSize: '52px',
    },
  },
  caption: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    color: '#000000',
    textAlign: 'left',
  },
  box: {
    display: 'grid',
    gridTemplateColumns: '540fr 424fr',
    alignItems: 'center',
    gap: '36px',
    mt: '56px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      mt: 0,
    },
  },
  text: {
    mt: '32px',
    fontSize: '16px',
    letterSpacing: '0.01em',
    color: '#000',
    textAlign: 'left',
  },
};

const Recruitment = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <Box sx={sxStyles.box}>
        <Image
          alt=""
          src={img}
          width={420}
          height={230}
          priority={false}
          style={{ width: '100%', height: 'auto' }}
        />
        <Box>
          <FadeInOnView>
            <Typography component="h2" sx={sxStyles.headingBox}>
              <Typography component="span" sx={sxStyles.heading}>
                Recruit
              </Typography>
              <Typography component="span" sx={sxStyles.caption}>
                採用情報
              </Typography>
            </Typography>
          </FadeInOnView>
          <Typography variant="caption" component="p" sx={sxStyles.text}>
            現在、募集は行っておりません。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Recruitment;
