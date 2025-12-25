import Box from '@mui/material/Box';
import Image from 'next/image';
import Fade from '@mui/material/Fade';
import kvPcImg from '../../public/image/top/kv_pc.png';
import kvSpImg from '../../public/image/top/kv_sp.png';

const Kv = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          overflow: 'hidden',
          '@media screen and (max-width:800px)': {
            display: 'none',
          },
        }}
      >
        <Fade in={true} timeout={1000}>
          <Image alt="fv" src={kvPcImg.src} width={1233} height={571} />
        </Fade>
      </Box>
      <Box
        sx={{
          display: 'none',
          '@media screen and (max-width:800px)': {
            display: 'block',
          },
        }}
      >
        <Fade in={true} timeout={1000}>
          <Image
            alt="fv"
            src={kvSpImg.src}
            width={750}
            height={796}
            style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            priority={true}
          />
        </Fade>
      </Box>
    </>
  );
};

export default Kv;
