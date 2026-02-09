'use client';
import headingMaterialsImg from '../../../public/image/school/heading_materials.png';
import book from '../../../public/image/school/thumbnail_book_1.webp';
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
      width: '278px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        maxWidth: '222px',
        width: '100%',
      },
    },
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    mt: 0,
  },
  listWrap: {
    boxShadow: 'none',
    p: 0,
    '& > a': {
      height: '100%',
      display: 'inline-block'
    },
  },
  listItemBox: {
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
    mt: 2,
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
  wrap: {
    maxWidth: '848px',
    paddingInline: '24px',
    marginInline: 'auto',
  },
  section: {
    mt: 5,
    '& + &': {
      mt: 6,
    }
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  introduction: {
    fontSize: '14px',
    textAlign: 'left',
    mt:2,
  },
  bookWrap: {
    mt:2,
    '& > a': {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      backgroundColor: '#fff',
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0px 0px 5px rgba(34, 106, 170, 0.1)',
      padding: 3,
      columnGap: '24px',
    },
    'img': {
      width: '100%',
      height: 'auto',
      boxShadow: '0px 0px 4px rgba(34, 106, 170, 0.2)',
    }
  },
  bookText: {
    textAlign: 'left',
  },
  bookTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  bookDetails: {
    fontSize: '12px',
    mt:1,
  }
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
    img: 'thumbnail_movie_scratch_shooting.png',
  },
  {
    id: 'movie2',
    title:
      'Scratch(スクラッチ)でアクションゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      'みんな大好きアクションゲームをScratch(スクラッチ)で作ってみよう！移動や攻撃、HPなどゲームに作りに役立つプログラミング方法を身につけましょう！',
    href: 'https://www.udemy.com/course/scratch-action/?referralCode=2B01C00B12BC9D6CD65A',
    img: 'thumbnail_movie_scratch_action.png',
  },
  {
    id: 'movie3',
    title:
      'Scratch(スクラッチ)でタイムアタックゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      '車を操作して最速タイムを目指すタイムアタックゲームをScratch(スクラッチ)で作ってみよう！条件分岐や変数、クローンといったScratchでよく使うコードブロックの使い方をマスターしよう！',
    href: 'https://www.udemy.com/course/scratch-race/?referralCode=38B9499821BEDA5C47E3',
    img: 'thumbnail_movie_scratch_race.png',
  },
];

const Movies = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
      <Box pt={7} pb={10} bgcolor="#F5F5F5">
        <Box sx={sxStyles.wrap}>
          <Typography variant="h2" sx={sxStyles.heading}>
            <img
              src={headingMaterialsImg.src}
              alt="オリジナル教材"
              width="556"
              height="106"
            />
          </Typography>
          <Box component="section" sx={sxStyles.section}>
            <Typography variant="h3" sx={sxStyles.subHeading}>動画</Typography>
            <Typography variant="body2" sx={sxStyles.introduction}>
              楽しいゲームを題材に独自の教材をお届けしています！
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
              すべて見る
            </Button>
          </Box>
          <Box component="section" sx={sxStyles.section}>
            <Typography variant="h3" sx={sxStyles.subHeading}>書籍</Typography>
            <Typography variant="body2" sx={sxStyles.introduction}>
              ジュニア・プログラミング検定の合格を目指す方のために、対策模擬問題集を制作・販売しています！
            </Typography>
            <Box sx={sxStyles.bookWrap}>
              <Link href='https://amzn.asia/d/09sHtK7E' target="_blank" rel="noopener">
                <img
                  src={book.src}
                  alt="オリジナル教材"
                  width="600"
                  height="848"
                />
                <Box sx={sxStyles.bookText}>
                  <Typography sx={sxStyles.bookTitle}>ジュニアプログラミング検定 Scratch部門 Ver3.0<br/>Bronze(3級) 模擬問題集</Typography>
                  <Typography sx={sxStyles.bookDetails}>Re:ProSオリジナル！ジュニア・プログラミング検定の出題傾向を分析したオリジナル問題集です。</Typography>
                  <Typography sx={sxStyles.bookDetails}>・本番を想定した5つの模擬問題を収録<br/>・すべて解説つき・模範回答あり<br/>・記述対策（説明文の書き方）にも対応</Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default Movies;
