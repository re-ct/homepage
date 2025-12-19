'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';

type Business = {
  id: string;
  title: string;
  detail: string;
  img: string;
  href: string;
};

const BusinessList: Business[] = [
  {
    id: '1',
    title: 'プログラミング教室 Re:ProS',
    detail: '学生向けのプログラミングスクール',
    img: 'service_programming',
    href: '/school',
  },
  {
    id: '2',
    title: 'Re:ProS Career',
    detail: 'エンジニアのキャリア支援',
    img: 'service_career',
    href: '/career',
  },
  {
    id: '3',
    title: '開発等の相談',
    detail: 'どんな案件でもまずはご相談ください！',
    img: 'service_soudan',
    href: '/demand',
  },
];

const sxStyles = {
  section: {
    width: '100%',
    background: '#00298A',
    paddingBlock: '100px 140px',
    '@media screen and (max-width:768px)': {
      paddingBlock: '80px 100px',
    },
  },
  wrap: {
    maxWidth: '932px',
    width: '100%',
    margin: '0 auto',
    paddingInline: '16px',
  },
  heading: {
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    fontSize: '40px',
    color: '#fff',
  },
  caption: {
    fontSize: '17px',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    color: '#7994D5',
    textAlign: 'left',
  },
  listWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(auto,290px)',
    columnGap: '36px',
    mt: '48px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      mt: '36px',
    },
  },
  list: {
    padding: 0,
    '& > li': {
      padding: 0,
    },
    '& > li > a': {
      paddingBottom: '32px',
      borderBottom: 'solid 1px rgba(255, 255, 255, 0.3)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridTemplateRows: 'auto',
      width: '100%',
      transition: 'opacity 0.4s ease-in-out',
      '@media screen and (max-width:768px)': {
        display: 'grid',
        gridTemplateColumns: '21% 1fr 20px',
        columnGap: '20px',
        paddingBottom: '24px',
      },
      '&:hover': {
        opacity: '0.8',
      },
    },
    '& > li + li > a': {
      paddingTop: '32px',
      '@media screen and (max-width:768px)': {
        paddingTop: '24px',
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
    },
  },
  detail: {
    mt: '8px',
    fontSize: '14px',
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
        <Typography variant="h2" sx={sxStyles.heading}>
          事業内容
        </Typography>
        <Typography variant="caption" component="span" sx={sxStyles.caption}>
          Service
        </Typography>
        <Box sx={sxStyles.listWrap}>
          <List sx={sxStyles.list}>
            {BusinessList.map((item) => (
              <ListItem
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
              >
                <Link href={item.href} target="_blank" rel="noopener">
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
    </Box>
  );
};

export default Business;
