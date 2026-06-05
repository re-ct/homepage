'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { type ReactNode, useState } from 'react';
import FadeInOnView from '../components/FadeInOnView';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['900'],
  subsets: ['latin'],
  display: 'swap',
});

type Business = {
  id: string;
  title: string;
  detail: ReactNode;
  img: string;
  href: string;
};

const BusinessList: Business[] = [
  {
    id: '1',
    title: 'プログラミング教室 Re:ProS',
    detail: (
      <>
        現役エンジニアが講師を務める
        <br />
        学生向けプログラミングスクールです。
      </>
    ),
    img: 'service_programming',
    href: '/school/',
  },
  {
    id: '2',
    title: 'Re:ProS Career',
    detail: (
      <>
        エンジニアに特化した転職エージェント。
        <br />
        キャリア相談やスキル支援で、転職をサポートいたします。
      </>
    ),
    img: 'service_career',
    href: '/career/',
  },
  {
    id: '3',
    title: '開発支援',
    detail: (
      <>
        Webアプリ開発・クリエイティブ制作で
        <br />
        ビジネス課題を解決へと導くお手伝いをいたします。
      </>
    ),
    img: 'service_soudan',
    href: '/demand/',
  },
];

const sxStyles = {
  section: {
    mt: '-50px',
    zIndex: '1',
    position: 'relative',
    width: '100%',
  },
  wrap: {
    maxWidth: '1332px',
    width: '100%',
    margin: '0 auto',
    padding: '100px 16px 130px 16px',
    background: '#00298A',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    '@media screen and (max-width:768px)': {
      borderRadius: '8px 8px 0 0',
      paddingBlock: '80px 100px',
    },
  },
  box: {
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
  },
  headingBox: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  heading: {
    fontFamily: lato.style.fontFamily,
    fontWeight: '900',
    fontSize: '65px',
    color: '#fff',
    letterSpacing: '0.02em',
    lineHeight: '1',
    '@media screen and (max-width:768px)': {
      fontSize: '52px',
    },
  },
  caption: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    color: '#fff',
    textAlign: 'left',
  },
  text: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    color: '#fff',
    textAlign: 'left',
    mt: '24px',
  },
  listWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(auto,430px)',
    columnGap: '36px',
    mt: '62px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      mt: '36px',
    },
  },
  list: {
    padding: 0,
    '& > li': {
      padding: 0,
      '&:first-child > a': {
        borderTop: 'solid 1px rgba(255, 255, 255, 0.3)',
      },
    },
    '& > li > a': {
      paddingBlock: '36px',
      borderBottom: 'solid 1px rgba(255, 255, 255, 0.3)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridTemplateRows: 'auto',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      transition: 'color 0.35s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '1px',
        backgroundColor: '#fff',
        transform: 'scaleX(0)',
        transformOrigin: 'left center',
        transition: 'transform 0.35s ease',
        zIndex: 1,
      },
      '& > *': {
        position: 'relative',
        zIndex: 2,
      },
      '& > svg': {
        flexShrink: 0,
      },
      '@media screen and (max-width:768px)': {
        display: 'grid',
        gridTemplateColumns: '21% 1fr 20px',
        columnGap: '20px',
        paddingBlock: '24px',
      },
      '&:hover::before': {
        transform: 'scaleX(1)',
      },
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    '@media screen and (max-width:768px)': {
      fontSize: '20px',
      lineHeight: '1.4',
    },
  },
  detail: {
    mt: '12px',
    fontSize: '16px',
    lineHeight: '1.6',
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
    '@media screen and (max-width:768px)': {
      fontSize: '12px',
    },
  },
  listImage: {
    width: '100%',
    position: 'relative',
    aspectRatio: '290 / 332',
    '&>img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '4px',
      transition: 'opacity 0.4s ease-in-out',
    },
    '@media screen and (max-width:768px)': {
      display: 'none',
    },
  },
  listImageSp: {
    display: 'none',
    '@media screen and (max-width:768px)': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
};

const Business = () => {
  const [hoveredId, setHoveredId] = useState(BusinessList[0]?.id);
  return (
    <Box component="section" sx={sxStyles.section}>
      <Box component="section" sx={sxStyles.wrap}>
        <FadeInOnView>
          <Box component="section" sx={sxStyles.box}>
            <Typography component="h2" sx={sxStyles.headingBox}>
              <Typography component="span" sx={sxStyles.heading}>
                Service
              </Typography>
              <Typography component="span" sx={sxStyles.caption}>
                事業内容
              </Typography>
            </Typography>
            <Typography component="p" sx={sxStyles.text}>
              高い技術力を強みに、エンジニアリングに関する事業を運営しております。
            </Typography>
            <Box sx={sxStyles.listWrap}>
              <List sx={sxStyles.list}>
                {BusinessList.map((item) => (
                  <ListItem
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                  >
                    <Link href={item.href}>
                      <Box
                        component="img"
                        key={item.id}
                        width="152"
                        height="152"
                        src={`/image/top/${item.img}_square.webp`}
                        alt={item.title}
                        sx={sxStyles.listImageSp}
                      />
                      <Box>
                        <Typography variant="h3" sx={sxStyles.title}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={sxStyles.detail}>
                          {item.detail}
                        </Typography>
                      </Box>
                      <OpenInNewIcon
                        sx={{
                          fontSize: '28px',
                          '@media screen and (max-width:768px)': {
                            fontSize: '20px',
                          },
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Box sx={sxStyles.listImage}>
                {BusinessList.map((item) => (
                  <Box
                    component="img"
                    key={item.id}
                    width="580"
                    height="664"
                    src={`/image/top/${item.img}_rectangle.webp`}
                    alt={item.title}
                    style={{
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </FadeInOnView>
      </Box>
    </Box>
  );
};

export default Business;
