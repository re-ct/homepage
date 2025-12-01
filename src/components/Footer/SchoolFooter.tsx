'use client';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import logoReprosImg from '../../../public/image/school/logo.png';
import Image from 'next/image';
import { contact } from '../../lib/const/Link';
import { CommonLink } from '../CommonLink';

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
  footer: {
    paddingTop: '40px',
    borderTop: 'solid 1px #E7E7E7',
  },
  footerWrap: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    paddingBottom: '60px',
  },
  title: {
    letterSpacing: '1px',
    fontSize: '14px',
    marginBottom: '12px',
  },
  links: {
    marginTop: '36px',
  },
  linksItem: {
    padding: 0,
    letterSpacing: '1px',
    fontSize: '12px',
    flexDirection: 'row',
    '&::before': {
      content: '"・"',
    },
    '& + &': {
      marginTop: '6px',
    },
    '& > a': {
      transition: 'all 0.3s linear',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
};

const SchoolFooter = () => {
  const footerContent = [
    { text: '豊川市でプログラミングを学ぶならRe:ProS', href: '/school' },
    {
      text: 'プログラミング総合情報メディア Re:ProS(レプロス)メディア',
      href: '/articles/',
      external: true,
    }, //別リポジトリのサイトのため、ローカルでは見れない
    {
      text: 'Re:ProS フランチャイズオーナー募集サイト',
      href: '/school/fc/',
      external: true,
    },
  ];
  return (
    <>
      <Box component="footer" sx={sxStyles.footer}>
        <Box sx={sxStyles.footerWrap}>
          <Typography sx={sxStyles.title}>
            愛知県豊川市御津町で運営するプログラミング教室
          </Typography>
          <Image
            alt="豊川市でプログラミングを学ぶならRe:ProS(レプロス)"
            src={logoReprosImg.src}
            width={150}
            height={25}
            style={{ verticalAlign: 'bottom' }}
          />
          <List sx={sxStyles.links}>
            {footerContent.map((link, index) => (
              <ListItem key={index} sx={sxStyles.linksItem}>
                {link.href ? (
                  <CommonLink
                    link={{
                      href: link.href,
                      external: link.external || false,
                    }}
                  >{link.text}</CommonLink>
                ) : (
                  <ListItemText />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
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
                >運営会社</CommonLink>
              <CommonLink
                  link={{
                    href: contact,
                    external: true,
                  }}
                >お問い合わせ</CommonLink>
              <CommonLink
                  link={{
                    href: '/privacy',
                    external: false,
                    newTab: true,
                  }}
                >プライバシーポリシー</CommonLink>
              <CommonLink
                  link={{
                    href: '/announcement',
                    external: false,
                    newTab: true,
                  }}
                >電子広告</CommonLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SchoolFooter;
