import React from 'react';
import Link from 'next/link';
import { Typography, Box } from '@mui/material';
import { Announcement } from '../../lib/const/Announcement';
import { CommonLink } from '../../components/CommonLink';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sxStyles = {
  noData: {
    pt: 8,
    color: '#545454',
  },
  ul: {
    marginTop: '32px',
    listStyle: 'none',
    '>li>a': {
      padding: '24px 12px 22px 8px',
      columnGap: '20px',
      display: 'grid',
      gridTemplateColumns: '116px 1fr auto',
      fontSize: '14px',
      borderBottom: '1px solid rgb(217, 217, 217)',
      transition: 'all 0.2s ease-in-out',
      '@media screen and (max-width:768px)': {
        gridTemplateColumns: '1fr 20px',
        alignItems: 'center',
        rowGap: '8px',
      },
      '&>time': {
        color: '#545454',
        transition: 'all 0.2s ease-in-out',
        '@media screen and (max-width:768px)': {
          gridRow: '1/2',
          gridColumn: '1/2',
        },
      },
      svg: {
        width: '20px',
        color: '#00298A',
        '@media screen and (max-width:768px)': {
          gridRow: '1/3',
          gridColumn: '2/3',
        },
      },
      '>span': {
        '@media screen and (max-width:768px)': {
          gridRow: '2/3',
          gridColumn: '1/2',
        },
      },
      '&:hover': {
        borderBottom: '1px solid #00298A',
        color: '#00298A',
        '&>time': {
          color: '#00298A',
        },
      },
    },
  },
};

const list = Announcement.map((post) => (
  <React.Fragment key={post.link}>
    <li>
      <Link href={`${post.link}`}>
        <time dateTime={`${post.year}-${post.month}-${post.day}`}>
          {post.year}年{post.month}月{post.day}日
        </time>
        <span>{post.title}</span>
        <ArrowForwardIcon />
      </Link>
    </li>
  </React.Fragment>
));

const Post = () => {
  const hasPosts = Announcement.length > 0;
  return (
    <>
      {hasPosts ? (
        <Box component="ul" sx={sxStyles.ul}>
          {list}
        </Box>
      ) : (
        <>
          <Typography sx={sxStyles.noData}>
            現在、掲載すべき電子公告はありません。
          </Typography>
          <CommonLink
            link={{
              href: `/`,
              external: false,
            }}
            style={{
              backgroundColor: '#00298A',
              textTransform: 'none',
              padding: '16px 20px 16px 20px',
              borderRadius: '50px',
              boxShadow: 'none',
              minWidth: '283px',
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: '10px',
              transition: 'filter 0.3s',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: '36px',
            }}
          >
            サイトトップへ戻る
            <ArrowForwardIcon />
          </CommonLink>
        </>
      )}
    </>
  );
};

export default Post;
