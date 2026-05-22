'use client';
import Toolbar from '@mui/material/Toolbar';
import { CommonLink } from '../CommonLink';
import Image from 'next/image';
import logo from '../../../public/image/career/logo_repros_career.svg';
import { Box, Typography } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import { careerContact } from '../../lib/const/Link';

const sxStyles = {
  header: {
    width: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mx: 'auto',
    '& > a': {
      textDecoration: 'none',
      display: 'flex',
      columnGap: '12px',
      alignItems: 'center',
      '& img': {
        width: '259px',
        '@media screen and (max-width:768px)': {
          width: '100%',
        },
      },
    },
  },
  button: {
    '@media screen and (max-width:768px)': {
      width: '48%',
      maxWidth: '160px',
    },
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
      lineHeight: '1',
      display: 'flex',
      alignItems: 'center',
      columnGap: '8px',
      justifyContent: 'center',
      minHeight: '36px',
      '& .MuiButton-endIcon': {
        marginLeft: '8px',
        '& > :nth-of-type(1)': {
          fontSize: '16px',
        },
      },
      '@media screen and (max-width:768px)': {
        paddingInline: '16px',
        fontSize: 'min(12px,3vw)',
        lineHeight: '1',
        columnGap: '4px',
        '& > svg': {
          fontSize: 'min(16px,4vw)',
        },
      },
      '@media screen and (max-width:320px)': {
        display: 'none',
      },
      '&:hover': {
        boxShadow: 'none',
        filter: 'brightness(0.8)',
      },
    },
  },
  logoText: {
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '0.03em',
    lineHeight: '1',
    color: '#000',
    whiteSpace: 'nowrap',
    marginTop: '14px',
    '@media screen and (max-width:1190px)': {
      fontSize: '12px',
    },
    '@media screen and (max-width:430px)': {
      fontSize: '10px',
    },
  },
  link: {
    fontSize: '14px',
    color: '#000',
    '>a': {
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '16px',
  },
};

const CareerBusinessHeader = () => {
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
            width={518}
            height={46}
            priority={true}
            style={{ verticalAlign: 'bottom', width: '100%', height: 'auto' }}
          />
          <Typography component="p" sx={sxStyles.logoText}>
            採用担当者向け
          </Typography>
        </CommonLink>
        <Box sx={sxStyles.buttons}>
          <Box sx={sxStyles.link}>
            <CommonLink
              link={{
                href: '/career',
                external: true,
              }}
            >
              <span>求職者の方はこちら</span>
            </CommonLink>
          </Box>
          <Box sx={sxStyles.button}>
            {/* TODO：リンクさしかえ */}
            <CommonLink
              link={{
                href: careerContact,
                external: true,
              }}
            >
              <span>お問い合わせ</span>
              <PlayCircle style={{ fontSize: '16px' }} />
            </CommonLink>
          </Box>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default CareerBusinessHeader;
