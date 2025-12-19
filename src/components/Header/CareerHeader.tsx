'use client';
import Toolbar from '@mui/material/Toolbar';
import { CommonLink } from '../CommonLink';
import Image from 'next/image';
import logo from '../../../public/image/career/logo_reprosCareer.svg';
import Box from '@mui/material/Box';
import { PlayCircle } from '@mui/icons-material';
import { careerContact } from '../../lib/const/Link';

const sxStyles = {
  header: {
    width: '980px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2,
    mx: 'auto',
  },
  button: {
    '& > a': {
      fontSize: 14,
      fontWeight: 'bold',
      pl: 4,
      pr: 3,
      py: 1,
      borderRadius: 8,
      bgcolor: '#EF6C00',
      color: '#fff',
      boxShadow: 'none',
      letterSpacing: '0.06em',
      transition: 'filter 0.3s',
      lineHeight: '1.6',
      display: 'flex',
      alignItems: 'center',
      columnGap: '8px',
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
    }
  },
};

const CareerHeader = () => {
  return (
    <Toolbar
      sx={{
        backgroundColor: '#fff',
        border: 'solid 1px #fff',
        boxShadow: '0px 1px 2px rgba(0,0,0, 0.08)',
      }}
    >
      <Box sx={sxStyles.header} component="h1">
        <CommonLink
          link={{
            href: '/career',
            external: false,
          }}
        >
          <Image
            alt="Re:ProS(レプロス)Careerのロゴ"
            src={logo.src}
            width={259}
            height={33}
            priority={true}
            style={{ verticalAlign: 'bottom' }}
          />
        </CommonLink>
        <Box sx={sxStyles.button}>
          <CommonLink
            link={{
              href: careerContact,
              external: true,
            }}
          >
            無料相談フォーム
            <PlayCircle style={{fontSize: '16px'}}/>
          </CommonLink>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default CareerHeader;
