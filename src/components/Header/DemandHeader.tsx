'use client';
import Toolbar from '@mui/material/Toolbar';
import { CommonLink } from '../CommonLink';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logoRectImg from '../../../public/image/top/logo_rect.png';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import { contact } from '../../lib/const/Link';

const sxStyles = {
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

const DemandHeader = () => {
  const router = useRouter();
  const demandHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(contact);
  };
  return (
    <Toolbar
      sx={{
        backgroundColor: '#fff',
        border: 'solid 1px #fff',
        boxShadow: '0px 1px 2px rgba(0,0,0, 0.08)',
      }}
    >
      <Box sx={sxStyles.demandHeader} component="h1">
        <CommonLink
          link={{
            href: '/',
            external: false,
          }}
        >
          <Image
            alt="RE:CT(レクト)"
            src={logoRectImg.src}
            width={120}
            height={34}
            priority={true}
          />
        </CommonLink>
        <Button
          variant="contained"
          sx={sxStyles.demandButton}
          endIcon={<ArrowForwardIcon />}
          onClick={demandHandleClick}
          data-ga="demand_contact_form_header"
        >
          お問い合わせ
        </Button>
      </Box>
    </Toolbar>
  );
};

export default DemandHeader;
