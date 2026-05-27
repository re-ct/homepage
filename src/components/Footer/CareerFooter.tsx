'use client';
import { CommonLink } from '../CommonLink';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import { contact } from '../../lib/const/Link';
import logo from '../../../public/image/career/logo_repros_career.svg';
import Image from 'next/image';

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
    fontFeatureSettings: '"palt"',
    '@media screen and (max-width:450px)': {
      display: 'grid',
      gridTemplateColumns: '1fr',
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

const CareerFooter = () => {
  const footerContent = [
    { text: '求職者の方', href: '/career' },
    { text: '採用担当者の方', href: '/career/for-business' },
    {
      text: '求職者・求人者の皆様へのご案内',
      href: '/career/regulations/',
    },
  ];
  return (
    <Box component="footer" sx={sxStyles.footer}>
      <Box sx={sxStyles.footerWrap}>
        <Typography sx={sxStyles.title}>
          エンジニアのキャリアに関するお悩みをサポート
        </Typography>
        <Image
          alt="エンジニアのお悩みを無料でサポート Re:ProS Career"
          src={logo.src}
          width={259}
          height={33}
          style={{ verticalAlign: 'bottom' }}
        />
        <List sx={sxStyles.links}>
          {footerContent.map((link, index) => (
            <ListItem key={index} sx={sxStyles.linksItem}>
              {link.href ? (
                <CommonLink
                  link={{
                    href: link.href,
                    external: false,
                  }}
                >
                  {link.text}
                </CommonLink>
              ) : (
                <ListItemText primary={link.text} />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={sxStyles.copy}>
        <Box sx={sxStyles.copyWrap}>
          <Typography sx={sxStyles.copyText}>©RECT 2025</Typography>
          <Box sx={sxStyles.list}>
            <CommonLink
              link={{
                href: '/',
                external: false,
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
                href: '/privacy/',
                external: false,
              }}
            >
              プライバシーポリシー
            </CommonLink>
            <CommonLink
              link={{
                href: '/announcement/',
                external: false,
              }}
            >
              電子公告
            </CommonLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerFooter;
