'use client';
import { CommonLink } from '../CommonLink';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import { contact } from '../../lib/const/Link';
import Image from 'next/image';
import logoRectImg from '../../../public/image/top/logo_rect.png';

const sxStyles = {
  footer: {
    background: '#fff',
    borderTop: 'solid 1px #E7E7E7',
  },
  wrap: {
    maxWidth: '932px',
    width: '100%',
    margin: '0 auto',
    padding: '40px 16px 50px',
    display: 'grid',
    gridTemplateColumns: '130px 1fr',
    columnGap: 'min(80px,5vw)',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
      '@media screen and (max-width:768px)': {
        maxWidth: '130px',
      },
    },
  },
  links: {
    padding: 0,
    mt: '12px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,auto)',
    columnGap: 'min(111px,7vw)',
    rowGap: '16px',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      mt: '32px',
      rowGap: '12px',
    },
    '& li': {
      padding: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& li>div': {
      flex: 'none',
    },
    '& li:nth-child(2)': {
      gridColumn: '2 / 3',
      gridRow: '1 / 10',
    },
    '& li:nth-child(4)': {
      gridColumn: '3 / 4',
    },
    '& li:nth-child(5)': {
      gridColumn: '3 / 4',
    },
    '& li span': {
      fontSize: '14px !important',
      fontWeight: 'bold',
      color: '#000',
    },
    '& a': {
      transition: 'all 0.3s ease-out',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  nestLink: {
    mt: '9px',
    pt: 0,
    listStyle: 'disc',
    '@media screen and (max-width:768px)': {
      mt: '3px',
    },
    '& > li': {
      mt: '6px',
      display: 'list-item',
      marginLeft: '1.3em',
      listStyle: 'disc',
    },
  },
  copyRight: {
    letterSpacing: '0.1em',
    fontSize: '14px',
    color: '#fff',
    py: 2,
    textAlign: 'center',
    backgroundColor: '#00319F',
  },
};

const Copyright = () => {
  return (
    <Typography variant="caption" sx={sxStyles.copyRight} component="p">
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
    {
      text: '事業内容',
      children: [
        { text: 'プログラミング教室 Re:ProS', href: '/school' },
        {
          text: 'プログラミングメディア Re:ProSメディア',
          href: '/articles/',
          external: true,
        }, //別リポジトリのサイトのため、ローカルでは見れない
        { text: 'Re:ProS Career', href: '/career' },
        { text: '開発等の相談', href: '/demand' },
      ],
    },
    {
      text: 'お問い合わせ',
      href: contact,
      external: true,
    },
    { text: 'プライバシーポリシー', href: '/privacy' },
    { text: '電子公告', href: '/announcement' },
  ];

  return (
    <Box component="footer" sx={sxStyles.footer}>
      <Box sx={sxStyles.wrap}>
        <Image
          alt="RE:CT(レクト)"
          src={logoRectImg.src}
          width={240}
          height={68}
          priority={true}
        />
        <List sx={sxStyles.links}>
          {footerContent.map((link, index) => (
            <ListItem key={index}>
              {link.href ? (
                <CommonLink
                  link={{
                    href: link.href,
                    external: link.external || false,
                  }}
                  style={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {link.text}
                </CommonLink>
              ) : (
                <ListItemText
                  primary={link.text}
                  style={{
                    margin: 0,
                  }}
                />
              )}
              {link.children && link.children.length > 0 && (
                <List sx={sxStyles.nestLink}>
                  {link.children.map((childLink, childIndex) => (
                    <ListItem key={childIndex}>
                      <CommonLink
                        link={{
                          href: childLink.href,
                          external: childLink.external || false,
                        }}
                        style={{
                          color: '#000',
                          fontSize: '14px',
                        }}
                      >
                        {childLink.text}
                      </CommonLink>
                    </ListItem>
                  ))}
                </List>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
      <Copyright />
    </Box>
  );
};

export default CorporateFooter;
