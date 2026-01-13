'use client';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoReprosImg from '../../../public/image/school/logo.png';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const sxStyles = {
  schoolHeader: {
    width: '980px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
    mx: 'auto',
    '& a': {
      maxWidth: '150px',
      width: '40%',
      '&>img': {
        width: '100%',
        height: 'auto',
      },
    },
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
    '@media screen and (max-width:320px)': {
      display: 'none',
    },
  },
};

const SchoolHeader = () => {
  const router = useRouter();
  const schoolHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/school/complete');
  };

  return (
    <Toolbar sx={{ backgroundColor: '#fff' }}>
      <Box sx={sxStyles.schoolHeader} component="h1">
        <Link href="/school">
          <Image
            alt="豊川市でプログラミングを学ぶならRe:ProS(レプロス)"
            src={logoReprosImg}
            priority
            unoptimized
            sizes="150px"
            style={{ verticalAlign: 'bottom', height: 'auto' }}
          />
        </Link>
        <Button
          variant="contained"
          sx={sxStyles.button}
          endIcon={<PlayCircle />}
          onClick={schoolHandleClick}
        >
          無料体験受付中
        </Button>
      </Box>
    </Toolbar>
  );
};

export default SchoolHeader;
