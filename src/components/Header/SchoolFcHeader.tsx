'use client';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Image from 'next/image';
import logoReprosImg from '../../../public/image/school/logo.png';
import { Box, Typography, IconButton, Drawer, colors } from '@mui/material';
import React from 'react';
import { commonSxStyles } from '@/app/school/components/Style';
import { KeyboardArrowRight } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

type Menu = {
  id: string;
  title: string;
  url: string;
};

const menu: Menu[] = [
  {
    id: '1',
    title: '特徴',
    url: '#feature',
  },
  {
    id: '2',
    title: '費用',
    url: '#fee',
  },
  {
    id: '3',
    title: '他社との違い',
    url: '#comparison',
  },
  {
    id: '4',
    title: '加盟の流れ',
    url: '#flow',
  },
  {
    id: '5',
    title: 'よくある質問',
    url: '#faq',
  },
  {
    id: '6',
    title: '会社概要',
    url: '/',
  },
];

const sxStyles = {
  wrap: {
    width: '1200px',
    mx: 'auto',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    columnGap: '20px',
    flexWrap: 'wrap',
    '@media screen and (max-width:1190px)': {
      flexDirection: 'column-reverse',
      alignItems: 'flex-end',
      gap: '10px',
      py: 1,
    },
    '@media screen and (max-width:768px)': {
      display: 'none',
    },
  },
  schoolHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: '20px',
    '& > a': {
      textDecoration: 'none',
      display: 'flex',
      columnGap: '12px',
      alignItems: 'center',
    },
  },
  logoText: {
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '0.03em',
    lineHeight: '1',
    color: '#000',
    '@media screen and (max-width:1190px)': {
      fontSize: '12px',
    },
    '@media screen and (max-width:430px)': {
      fontSize: '10px',
    },
    '& br': {
      display: 'none',
      '@media screen and (max-width:1190px) and (min-width:769px)': {
        display: 'block',
      },
    },
  },
  linksMenu: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    columnGap: '22px',
    '& > li': {
      display: 'flex',
      alignItems: 'stretch',
      height: '100%',
      '& > a': {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        height: '100%',
        color: '#000',
        fontSize: '14px',
        transition: 'all 0.3s ease-out',
        borderBottom: 'solid 3px #fff',
        '@media screen and (max-width:1190px)': {
          fontSize: '12px',
        },
        '&:hover': {
          color: '#24285B',
          borderBottom: 'solid 3px #24285B',
        },
      },
    },
  },
  linksButtons: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    columnGap: '8px',
  },
  linksButton: {
    '& > a': {
      borderRadius: '30px',
      py: 1,
      px: 2,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      letterSpacing: '0.05em',
      lineHeight: '1',
      width: '126px',
      height: '38px',
    },
  },
  linksButtonsMaterial: {
    '& > a': {
      backgroundColor: commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.white,
      transition: 'filter 0.3s',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
  linksButtonsContact: {
    '& > a': {
      backgroundColor: commonSxStyles.color.white,
      border: 'solid 1px' + commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.Orange[400],
      transition: 'filter 0.3s',
      '&:hover': {
        filter: 'brightness(0.9)',
      },
    },
  },
  hamburgerMenu: {
    width: '100vw',
    '& > li:first-child': {
      borderTop: 'solid 1px #DDDDDD',
    },
    '& > li > a': {
      padding: '16px 24px',
      textDecoration: 'none',
      borderBottom: 'solid 1px #DDDDDD',
      display: 'flex',
      alignItems: 'center',
      color: commonSxStyles.color.black,
      justifyContent: 'space-between',
    },
  },
  iconButton: {
    display: 'none',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: commonSxStyles.color.black,
    },
    '& span': {
      '@media screen and (max-width:768px)': {
        fontSize: '10px',
      },
    },
  },
  iconButtonClose: {
    marginInline: 'auto 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: commonSxStyles.color.black,
    maxWidth: '48px',
    minWidth: '48px',
    '& span': {
      fontSize: '10px',
    },
  },
  linksHamburgerButtons: {
    mt: 5,
    listStyle: 'none',
    columnGap: '8px',
    px: 3,
  },
  linksHamburgerButton: {
    '& > a': {
      borderRadius: '30px',
      py: 2.5,
      px: 5,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '18px',
      letterSpacing: '0.05em',
      lineHeight: '1',
      width: '100%',
    },
  },
  linksHamburgerButtonsMaterial: {
    '& > a': {
      backgroundColor: commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.white,
    },
  },
  linksHamburgerButtonsContact: {
    mt: 3,
    '& > a': {
      border: 'solid 1px' + commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.Orange[400],
    },
  },
};

const SchoolFcHeader = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Toolbar
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Box sx={sxStyles.wrap}>
        <Box sx={sxStyles.schoolHeader} component="h1">
          <Link href="/school/fc">
            <Image
              alt="豊川市でプログラミングを学ぶならRe:ProS(レプロス)"
              src={logoReprosImg.src}
              width={150}
              height={25}
              priority={true}
              style={{ verticalAlign: 'bottom' }}
            />
            <Typography component="p" sx={sxStyles.logoText}>
              フランチャイズオーナー
              <br />
              募集サイト
            </Typography>
          </Link>
        </Box>
        <Box sx={sxStyles.links}>
          <Box component="ul" sx={sxStyles.linksMenu}>
            {menu.map((item) => (
              <React.Fragment key={item.id}>
                <Box component="li">
                  <Link href={item.url}>{item.title}</Link>
                </Box>
              </React.Fragment>
            ))}
          </Box>
          <Box component="ul" sx={sxStyles.linksButtons}>
            <Box
              component="li"
              sx={[sxStyles.linksButton, sxStyles.linksButtonsMaterial]}
            >
              <Link href="/school/fc">
                {/* TODO：リンク入れる */}
                資料請求
              </Link>
            </Box>
            <Box
              component="li"
              sx={[sxStyles.linksButton, sxStyles.linksButtonsContact]}
            >
              {/* TODO：リンク入れる */}
              <Link href="/school/fc">お問い合わせ</Link>
            </Box>
          </Box>
        </Box>
        <IconButton onClick={toggleDrawer(true)} sx={sxStyles.iconButton}>
          <MenuIcon />
          <Typography component="span">メニュー</Typography>
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          <IconButton
            onClick={toggleDrawer(false)}
            sx={sxStyles.iconButtonClose}
          >
            <CloseIcon />
            <Typography component="span">閉じる</Typography>
          </IconButton>
          <Box component="ul" sx={sxStyles.hamburgerMenu}>
            {menu.map((item) => (
              <React.Fragment key={item.id}>
                <Box component="li">
                  <Link href={item.url} onClick={toggleDrawer(false)}>
                    {item.title}
                    <KeyboardArrowRight />
                  </Link>
                </Box>
              </React.Fragment>
            ))}
          </Box>
          <Box component="ul" sx={sxStyles.linksHamburgerButtons}>
            <Box
              component="li"
              sx={[
                sxStyles.linksHamburgerButton,
                sxStyles.linksHamburgerButtonsMaterial,
              ]}
            >
              <Link href="/school/fc">
                {/* TODO：リンク入れる */}
                資料請求
              </Link>
            </Box>
            <Box
              component="li"
              sx={[
                sxStyles.linksHamburgerButton,
                sxStyles.linksHamburgerButtonsContact,
              ]}
            >
              {/* TODO：リンク入れる */}
              <Link href="/school/fc">お問い合わせ</Link>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Toolbar>
  );
};

export default SchoolFcHeader;
