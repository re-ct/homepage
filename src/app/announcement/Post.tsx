import React from 'react';
import { Box } from '@mui/material';
import { Announcement } from '../../lib/const/Announcement';
import { CommonLink } from '../../components/CommonLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const sxStyles = {
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
      <CommonLink
        link={{
          href: post.link,
          external: false,
          newTab: true,
        }}
      >
        <time
          dateTime={`${post.year}-${String(post.month).padStart(2, '0')}-${String(post.day).padStart(2, '0')}`}
        >
          {post.year}年{post.month}月{post.day}日
        </time>
        <span>{post.title}</span>
        <OpenInNewIcon />
      </CommonLink>
    </li>
  </React.Fragment>
));

const Post = () => {
  return (
    <>
      <Box component="ul" sx={sxStyles.ul}>
        {list}
      </Box>
    </>
  );
};

export default Post;
