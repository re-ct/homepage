'use client';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoReprosImg from '../../../public/image/school/logo.png';

const sxStyles = {
  schoolHeader: {
    width: '980px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
    mx: 'auto',
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    py: 0.5,
    px: 2,
    borderRadius: 8,
    bgcolor: '#EF6C00',
    color: '#fff',
    boxShadow: 'none',
    '& .MuiButton-endIcon': {
      marginLeft: '4px',
    },
    '&:hover': {
      backgroundColor: '#D46000',
      boxShadow: 'none',
    },
  },
};

const SchoolFcHeader = () => {

  return (
    <Toolbar sx={{ backgroundColor: '#fff' }}>
      <Box sx={sxStyles.schoolHeader} component="h1">
        <Link href="/school">
          <Image
            alt="豊川市でプログラミングを学ぶならRe:ProS(レプロス)"
            src={logoReprosImg.src}
            width={150}
            height={25}
            priority={true}
            style={{ verticalAlign: 'bottom' }}
          />
        </Link>
      </Box>
    </Toolbar>
  );
};

export default SchoolFcHeader;
