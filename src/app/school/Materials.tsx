'use client';
import headingMaterialsImg from '../../../public/image/school/heading_materials.png';
import book from '../../../public/image/school/thumbnail_book_1.webp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CommonLink } from '../../components/CommonLink';
import { Box, Typography, Container, Button } from '@mui/material';
import {
  PlayCircle,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

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
  listItemBox: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 0px 5px rgba(34, 106, 170, 0.1)',
    padding: '12px 12px 24px 12px',
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
    fontSize: '12px',
    letterSpacing: '0.1px',
    lineHeight: '1.5',
    color: '#333',
  },
  textLink: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '32px',
    display: 'inline-flex',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
  listBox: {
    mt: 2,
    p: '0 !important',
    maxWidth: '100%',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '& > .swiper': {
      '@media screen and (max-width:768px)': {
        px: '20px',
      },
    },
    '.swiper-slide': {
      height: 'auto',
      '@media screen and (max-width:768px)': {
        minWidth: '300px',
        maxWidth: '300px',
      },
    },
  },
  wrap: {
    maxWidth: '848px',
    paddingInline: '24px',
    marginInline: 'auto',
    '@media screen and (max-width: 768px)': {
      paddingInline: 0,
    },
  },
  section: {
    mt: 5,
    '& + &': {
      mt: 6,
    },
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
    '@media screen and (max-width: 768px)': {
      paddingInline: '24px',
    },
  },
  introduction: {
    fontSize: '14px',
    textAlign: 'left',
    mt: 2,
    '@media screen and (max-width: 768px)': {
      paddingInline: '24px',
    },
  },
  bookWrap: {
    mt: 2,
    cursor: 'pointer',
    '@media screen and (max-width: 768px)': {
      paddingInline: '24px',
    },
    '& > a': {
      display: 'grid',
      gridTemplateColumns: '130px 1fr',
      backgroundColor: '#fff',
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0px 0px 5px rgba(34, 106, 170, 0.1)',
      padding: 3,
      columnGap: '24px',
      cursor: 'pointer',
      '@media screen and (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '180px auto auto auto',
        rowGap: '16px',
        paddingInline: 2,
      },
      '&:hover': {
        opacity: 0.8,
        backgroundColor: '#fff',
      },
    },
    img: {
      width: '100%',
      height: 'auto',
      boxShadow: '0px 0px 4px rgba(34, 106, 170, 0.2)',
      '@media screen and (max-width: 768px)': {
        height: '100%',
        width: 'auto',
        marginInline: 'auto',
      },
    },
  },
  bookText: {
    textAlign: 'left',
    cursor: 'pointer',
  },
  bookTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  bookDetails: {
    fontSize: '12px',
    mt: 1,
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 1,
    '& .custom-prev-button, & .custom-next-button': {
      aspectRatio: '1/1',
      padding: '6px',
      color: 'rgb(93, 93, 93)',
      borderRadius: '100px',
      border: 'solid 1px #5D5D5D',
      transition: 'filter 0.3s ease-out',
      display: 'flex',
      background: '#f7f7f7',
      cursor: 'pointer',
      '@media screen and (max-width:768px)': {
        display: 'none',
      },
      '&:hover': {
        filter: 'brightness(0.95)',
      },
      '&.swiper-button-disabled': {
        opacity: 1,
        background: 'transparent',
        border: 'solid 1px #CCCCCC',
        color: '#CCCCCC',
        cursor: 'not-allowed',
      },
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

const MOVIE_SLIDE_THRESHOLD = 3

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
          <Box sx={sxStyles.menu}>
            <Box>
              <Typography variant="h3" sx={sxStyles.subHeading}>
                動画
              </Typography>
              <Typography variant="body2" sx={sxStyles.introduction}>
                楽しいゲームを題材に独自の教材をお届けしています！
              </Typography>
            </Box>
            <Box sx={sxStyles.menuIcon}>
              {movieList.length > MOVIE_SLIDE_THRESHOLD && (
                <>
                  <Box className="custom-prev-button">
                    <KeyboardArrowLeft />
                  </Box>
                  <Box className="custom-next-button">
                    <KeyboardArrowRight />
                  </Box>
                </>
              )}
            </Box>
          </Box>
          <Container sx={sxStyles.listBox}>
            <Swiper
              spaceBetween={12}
              slidesPerView={'auto'}
              navigation={
                movieList.length > MOVIE_SLIDE_THRESHOLD
                  ? {
                      prevEl: '.custom-prev-button',
                      nextEl: '.custom-next-button',
                    }
                  : false
              }
              modules={[Navigation]}
              breakpoints={{
                1040: {
                  slidesPerView: 3,
                },
                769: {
                  slidesPerView: 2,
                },
              }}
            >
              {movieList.map((item) => (
                <SwiperSlide key={item.id}>
                  <CommonLink
                    link={{
                      href: item.href,
                      external: true,
                    }}
                    gaLabel={`school_${item.id}_link`}
                  >
                    <Box sx={sxStyles.listItemBox}>
                      <img
                        width="536"
                        height="302"
                        src={`../../../image/school/${item.img}`}
                        alt={item.title}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: 4,
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
                  </CommonLink>
                </SwiperSlide>
              ))}
            </Swiper>
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
          <Typography variant="h3" sx={sxStyles.subHeading}>
            書籍
          </Typography>
          <Typography variant="body2" sx={sxStyles.introduction}>
            ジュニア・プログラミング検定の合格を目指す方のために、対策模擬問題集を制作・販売しています！
          </Typography>
          <Box sx={sxStyles.bookWrap}>
            <CommonLink
              link={{
                href: 'https://amzn.asia/d/09sHtK7E',
                external: true,
              }}
              gaLabel="school_exambook_link"
            >
              <img
                src={book.src}
                alt="オリジナル教材"
                width="600"
                height="848"
              />
              <Box sx={sxStyles.bookText}>
                <Typography sx={sxStyles.bookTitle}>
                  ジュニアプログラミング検定 Scratch部門 Ver3.0
                  {!isSmallScreen && <br />}Bronze(3級) 模擬問題集
                </Typography>
                <Typography sx={sxStyles.bookDetails}>
                  Re:ProSオリジナル！ジュニア・プログラミング検定の出題傾向を分析したオリジナル問題集です。
                </Typography>
                <Typography sx={sxStyles.bookDetails}>
                  ・本番を想定した5つの模擬問題を収録
                  <br />
                  ・すべて解説つき・模範回答あり
                  <br />
                  ・記述対策（説明文の書き方）にも対応
                </Typography>
              </Box>
            </CommonLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movies;
