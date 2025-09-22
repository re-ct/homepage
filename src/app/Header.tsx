'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoRectImg from '../../public/image/top/logo_rect.png';
import logoReprosImg from '../../public/image/school/logo.png';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { contact } from '../lib/const/Link';


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
  demandHeader: {
    width: '980px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
    mx: 'auto',
  },
  demandButton: {
    fontSize: 14,
    fontWeight: 'bold',
    pl: 4,
    pr: 3,
    py: 1,
    borderRadius: 8,
    bgcolor: '#00298A',
    color: '#fff',
    boxShadow: 'none',
    letterSpacing: '0.06em',
    transition: 'filter 0.3s',
    lineHeight: '1.6',
    '& .MuiButton-endIcon': {
      marginLeft: '8px',
      '& > :nth-of-type(1)': {
        fontSize: '16px',
      },
    },
    '&:hover': {
      boxShadow: 'none',
      filter: 'brightness(0.8)',
    },
  },
};

interface HeaderProps {
  isSchoolPage?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const schoolHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/school/complete');
  };
  const demandHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(contact);
  };
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  const isDemandPage = pathname.includes('/demand');

  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, boxShadow: 'none', background: 'none' }}
    >
      {isSchoolPage ? (
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
      ) : isDemandPage ? (
        <Toolbar
          sx={{
            backgroundColor: '#fff',
            border: 'solid 1px #fff',
            boxShadow: '0px 1px 2px rgba(0,0,0, 0.08)',
          }}
        >
          <Box sx={sxStyles.demandHeader} component="h1">
            <Link href="/">
              <Image
                alt="RE:CT(レクト)"
                src={logoRectImg.src}
                width={120}
                height={34}
                priority={true}
              />
            </Link>
            <Button
              variant="contained"
              sx={sxStyles.demandButton}
              endIcon={<ArrowForwardIcon />}
              onClick={demandHandleClick}
            >
              お問い合わせ
            </Button>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar
          sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          component="h1"
        >
          <Link href="/">
            <Image
              alt="RE:CT(レクト)"
              src={logoRectImg.src}
              width={120}
              height={34}
              priority={true}
            />
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
