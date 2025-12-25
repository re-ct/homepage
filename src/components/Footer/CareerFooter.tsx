'use client';
import { CommonLink } from '../CommonLink';
import { Box, Typography } from '@mui/material';
import { contact } from '../../lib/const/Link';

const sxStyles = {
  copy: {
    backgroundColor: '#00319F',
    py: 2,
    '@media screen and (max-width:450px)': {
      p: '26px 16px 16px',
    },
  },
  copyWrap: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width:450px)': {
      flexDirection: 'column-reverse',
      rowGap: '32px',
      px: 0,
    },
  },
  copyText: {
    color: '#fff',
    letterSpacing: '1px',
    fontSize: '14px',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '24px',
    color: '#fff',
    letterSpacing: '1px',
    fontSize: '12px',
    '@media screen and (max-width:450px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '16px 20px',
      width: '100%',
    },
    '& > a': {
      paddingBottom: '0.25px',
      borderBottom: 'solid 1px #fff',
      transition: 'opacity 0.3s linear',
      '@media screen and (max-width:450px)': {
        width: 'fit-content',
      },
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
};

const CareerFooter = () => {
  return (
    <Box component="footer" sx={sxStyles.copy}>
      <Box sx={sxStyles.copyWrap}>
        <Typography sx={sxStyles.copyText}>©RECT 2025</Typography>
        <Box sx={sxStyles.list}>
          <CommonLink
            link={{
              href: '/',
              external: false,
              newTab: true,
            }}
          >
            運営会社
          </CommonLink>
          <CommonLink
            link={{
              href: contact,
              external: true,
            }}
          >
            お問い合わせ
          </CommonLink>
          <CommonLink
            link={{
              href: '/privacy',
              external: false,
              newTab: true,
            }}
          >
            プライバシーポリシー
          </CommonLink>
          <CommonLink
            link={{
              href: '/announcement',
              external: false,
              newTab: true,
            }}
          >
            電子広告
          </CommonLink>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerFooter;
