'use client';
import headingMoviesImg from '../../../public/image/school/heading_movies.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, Typography, Container, Button } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';

const sxStyles = {
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '375px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '294px',
      },
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
    px: 3,
    '@media screen and (max-width:450px)': {
      justifyContent: 'flex-start',
    },
  },
  listWrap: {
    boxShadow: 'none',
    minWidth: '300px',
    maxWidth: '300px',
    p: 0,
    '& > a': {
      height: '100%',
    },
  },
  listItemBox: {
    width: '300px',
    pt: 2,
    pb: 5,
    px: 2,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: '100%',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: '#fff',
    },
    '&:last-child': {
      marginRight: 3,
    },
  },
  textContent: {
    p: 0,
    mt: 2,
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
    mt: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    letterSpacing: '0.5px',
    lineHeight: '1.5',
    color: '#333',
  },
  text: {
    mt: 1,
    letterSpacing: '0.1px',
    lineHeight: '1.5',
    color: '#333',
  },
  textLink: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '40px',
    display: 'inline-flex',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
  listBox: {
    mt: 4,
    p: 0,
    maxWidth: '100%',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '@media screen and (min-width: 1200px)': {
      p: 0,
      maxWidth: '100%',
    },
  },
};

type Movie = {
  id: string;
  title: string;
  summary: string;
  href: string;
  img: string;
};

const movieList: Movie[] = [
  {
    id: 'movie1',
    title:
      'Scratch(スクラッチ)でシューティングゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      'プログラミング初心者でもわかりやすく丁寧に解説！Scratch(スクラッチ)を通してプログラミングの基礎的な技術を身につけましょう！',
    href: 'https://www.udemy.com/course/scratch-shooting/?referralCode=51442CE63543EE22D9A6',
    img: 'thumbnail_movie_scratchShooting.png',
  },
  {
    id: 'movie2',
    title:
      'Scratch(スクラッチ)でアクションゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      'みんな大好きアクションゲームをScratch(スクラッチ)で作ってみよう！移動や攻撃、HPなどゲームに作りに役立つプログラミング方法を身につけましょう！',
    href: 'https://www.udemy.com/course/scratch-action/?referralCode=2B01C00B12BC9D6CD65A',
    img: 'thumbnail_movie_scratchAction.png',
  },
];

const Movies = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <>
      <Box pt={7} pb={7} bgcolor="#F5F5F5">
        <Typography variant="h2" sx={sxStyles.heading}>
          <img
            src={headingMoviesImg.src}
            alt="オリジナル動画教材"
            width="721"
            height="75"
          />
        </Typography>
        <Typography variant="body2" color="#333" fontWeight="bold" mt={2}>
          オンラインでも、楽しいゲームを題材に{isSmallScreen && <br />}
          独自の教材をお届けしています。
        </Typography>
        <Container sx={sxStyles.listBox}>
          <List sx={sxStyles.list}>
            {movieList.map((item) => (
              <ListItem key={item.id} sx={sxStyles.listWrap}>
                <Link href={item.href} target="_blank" rel="noopener">
                  <Box sx={sxStyles.listItemBox}>
                    <img
                      width="536"
                      height="302"
                      src={`../../../image/school/${item.img}`}
                      alt={item.title}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 12,
                      }}
                    />
                    <Box sx={sxStyles.textContent}>
                      <Typography variant="body1" sx={sxStyles.title}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={sxStyles.text}>
                        {item.summary}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </List>
        </Container>
        <Button
          variant="text"
          href="https://www.udemy.com/user/ling-mu-you-ji-28/"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<PlayCircle />}
          sx={sxStyles.textLink}
        >
          動画教材をすべて見る
        </Button>
      </Box>
    </>
  );
};

export default Movies;
