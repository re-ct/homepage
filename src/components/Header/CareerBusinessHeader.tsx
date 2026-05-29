'use client';
import Toolbar from '@mui/material/Toolbar';
import { CommonLink } from '../CommonLink';
import Image from 'next/image';
import logo from '../../../public/image/career/logo_repros_career.svg';
import { Box, Typography, IconButton, Drawer } from '@mui/material';
import { careerBusinessContact } from '../../lib/const/Link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { commonSxStyles } from '@/app/school/components/Style';
import { KeyboardArrowRight } from '@mui/icons-material';
import Link from '@mui/material/Link';

type Menu = {
  id: string;
  title: string;
  url: string;
};

const menu: Menu[] = [
  {
    id: '1',
    title: 'サービス概要',
    url: '#about',
  },
  {
    id: '2',
    title: '主なご紹介対象',
    url: '#engineers',
  },
  {
    id: '3',
    title: '料金体系',
    url: '#plan',
  },
  {
    id: '4',
    title: 'アドバイザーについて',
    url: '#advisor',
  },
];

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
      columnGap: '8px',
      alignItems: 'center',
      '.logo': {
        verticalAlign: 'bottom',
        width: '100%',
        height: 'auto',
        maxWidth: '259px',
        '@media screen and (max-width:768px)': {
          maxWidth: '181px',
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
      pl: 3,
      pr: 2,
      py: '12px',
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
      marginTop: '12px',
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
    '@media screen and (max-width:768px)': {
      display: 'none',
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
};

const CareerBusinessHeader = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
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
            href: '/career/for-business/',
            external: false,
          }}
        >
          <Image
            alt="Re:ProS(レプロス)Careerのロゴ"
            src={logo.src}
            width={518}
            height={46}
            priority={true}
            className="logo"
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
            <CommonLink
              link={{
                href: careerBusinessContact,
                external: true,
              }}
            >
              <span>お問い合わせ</span>
              <KeyboardArrowRight style={{ fontSize: '16px' }} />
            </CommonLink>
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
                    <Box component="span">{item.title}</Box>
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
              <CommonLink
                link={{
                  href: careerBusinessContact,
                  external: true,
                }}
                data-ga="fc_request_for_document_hamburger"
              >
                お問い合わせ
                <KeyboardArrowRight />
              </CommonLink>
            </Box>
            <Box
              component="li"
              sx={[
                sxStyles.linksHamburgerButton,
                sxStyles.linksHamburgerButtonsContact,
              ]}
            >
              <CommonLink
                link={{
                  href: '/career/',
                  external: true,
                }}
                data-ga="fc_contact_form_hamburger"
              >
                求職者の方はこちら
                <KeyboardArrowRight />
              </CommonLink>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Toolbar>
  );
};

export default CareerBusinessHeader;
