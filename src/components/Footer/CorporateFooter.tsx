'use client';
import { Box, List, Typography } from '@mui/material';
import { contact } from '../../lib/const/Link';
import { FooterLinkItem, LinkItem } from './Footer';

const sxStyles = {
  links: {
    padding: 0,
  },
  linksItem: {
    padding: 0,
    marginTop: '12px',
    '& > a': {
      color: '#fff',
      textDecoration: 'underline',
      fontSize: '14px',
    },
    '& > div > span': {
      color: '#fff',
      fontSize: '14px',
    },
  },
};

const Copyright = () => {
  return (
    <Typography
      variant="caption"
      mt={7}
      sx={{ letterSpacing: '2px', fontSize: '14px', color: '#667FB9' }}
      component="p"
    >
      <>
        ©RECT
        {new Date().getFullYear()}
      </>
    </Typography>
  );
};

const CorporateFooter = () => {
  const footerContent: LinkItem[] = [
    { text: '会社概要', href: '/' },
    { text: '事業内容' },
    { text: 'プログラミング教室', href: '/school', nested: true },
    {
      text: 'プログラミングメディア',
      href: '/articles/',
      nested: true,
      external: true,
    }, //別リポジトリのサイトのため、ローカルでは見れない
    { text: '開発等の相談', href: '/demand', nested: true },
    {
      text: 'お問い合わせ',
      href: contact,
      external: true,
    },
    { text: 'プライバシーポリシー', href: '/privacy' },
    { text: '電子公告', href: '/announcement' },
  ];

  return (
    <Box
      component="footer"
      sx={{ background: '#00298A', padding: '80px 0 50px' }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <List sx={sxStyles.links}>
          {footerContent.map((link, index) => (
            <FooterLinkItem
              key={index}
              link={link}
              index={index}
              sxStyles={sxStyles}
            />
          ))}
        </List>
        <Copyright />
      </Box>
    </Box>
  );
};

export default CorporateFooter;
