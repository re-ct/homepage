'use client';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoReprosImg from '../../../public/image/school/logo.png';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { contact } from '@/lib/const/Link';

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
  const pathname = usePathname();
  // 教室一覧ページでは、無料体験ではなく通常のお問い合わせへ誘導する
  const isListPage = pathname.includes('/school/list');
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
        {isListPage ? (
          <Button
            variant="contained"
            sx={sxStyles.button}
            endIcon={<PlayCircle />}
            href={contact}
            target="_blank"
            rel="noopener noreferrer"
            data-ga="schoolList_contact_header"
          >
            お問い合わせ
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={sxStyles.button}
            endIcon={<PlayCircle />}
            onClick={schoolHandleClick}
            data-ga="school_free_trial_header"
          >
            無料体験受付中
          </Button>
        )}
      </Box>
    </Toolbar>
  );
};

export default SchoolHeader;
