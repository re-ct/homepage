'use client';
import Link from 'next/link';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import { contact } from '../../lib/const/Link';

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
  const footerContent = [
    { text: '会社概要', href: '/' },
    { text: '事業内容' },
    { text: 'プログラミング教室', href: '/school', nested: true },
    { text: 'プログラミングメディア', href: '/articles/', nested: true }, //別リポジトリのサイトのため、ローカルでは見れない
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
        <List sx={{ padding: 0 }}>
          {footerContent.map((link, index) => (
            <ListItem
              key={index}
              sx={{
                padding: 0,
                marginTop: index !== 0 ? '12px' : 0,
                ...(link.nested && {
                  paddingLeft: '16px',
                  listStyleType: 'disc',
                }),
              }}
            >
              {link.href ? (
                <Link
                  style={{
                    color: '#fff',
                    textDecoration: 'underline',
                    fontSize: '14px',
                  }}
                  href={link.href}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  target={link.external ? '_blank' : undefined}
                >
                  {link.text}
                </Link>
              ) : (
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    color: '#fff',
                    fontSize: '14px',
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
        <Copyright />
      </Box>
    </Box>
  );
};

export default CorporateFooter;