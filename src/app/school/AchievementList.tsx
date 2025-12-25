'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingCtaImg from '../../../public/image/school/heading_achievementList.png';
import { commonSxStyles } from './components/Style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { achievementMembers } from '../../lib/const/AchievementMember';

const sxStyles = {
  contents: {
    overflow: 'hidden',
    mt: 5,
  },
  heading: {
    marginInline: '24px',
    display: 'inline-flex',
    '& > img': {
      width: '134px',
      height: 'auto',
    },
    '@media screen and (max-width:768px)': {
      '& > img': {
        width: '134px',
      },
    },
  },
  photos: {
    '& > .swiper': {
      display: 'flex',
      justifyContent: 'flex-start',
      overflow: 'scroll',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      maxWidth: '100%',
      width: '1100px',
      mx: 'auto',
      overflowY: 'hidden',
      marginTop: '20px',
      px: '20px',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '& .swiper-slide': {
        '@media screen and (max-width:768px)': {
          minWidth: '210px',
          maxWidth: '210px',
        },
      },
      '& .swiper-button-next, & .swiper-button-prev': {
        background: commonSxStyles.color.white,
        padding: '12px',
        color: '#956A1D',
        borderRadius: '100px',
        border: 'solid 1px' + '#956A1D',
        '@media screen and (max-width:768px)': {
          display: 'none',
        },
        '&.swiper-button-disabled': {
          opacity: 1,
          background: '#F5F5F5',
          border: 'solid 1px' + commonSxStyles.color.Gray[300],
          color: commonSxStyles.color.Gray[300],
        },
      },
    },
  },
  list: {
    borderRadius: '8px',
    border: 'solid 1px #956A1D',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    alignItems: 'center',
    padding: '16px 12px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      padding: 0,
    },
  },
  wrap: {
    paddingInline: '12px',
    textAlign: 'left',
    '@media screen and (max-width:768px)': {
      marginTop: '12px',
      marginBlock: '16px',
    },
  },
  date: {
    fontSize: '12px',
    color: commonSxStyles.color.Gray[700],
  },
  grade: {
    fontSize: '14px',
    marginTop: '4px',
    '& > span': {
      fontSize: '12px',
    },
  },
  member: {
    fontSize: '12px',
    marginTop: '4px',
    color: commonSxStyles.color.Gray[700],
  },
  headingText: {
    marginTop: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageWrap: {
    aspectRatio: '458 / 358',
    overflow: 'hidden',
    '@media screen and (max-width:768px)': {
      borderRadius: 0,
      aspectRatio: 'auto',
    },
    '& > img': {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
      '@media screen and (max-width:768px)': {
        verticalAlign: 'bottom',
      },
    },
  },
};

const AchievementList = () => {
  return (
    <Box sx={sxStyles.contents}>
      <Typography variant="h2" sx={sxStyles.heading}>
        <img src={headingCtaImg.src} alt="合格実績" width="532" height="122" />
      </Typography>
      <Typography
        variant="body2"
        sx={[sxStyles.headingText, commonSxStyles.typography.normalText]}
      >
        開校以来、合格率100%を継続中！
      </Typography>
      <Box sx={sxStyles.photos}>
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            769: {
              slidesPerView: 3,
            },
          }}
        >
          {[...achievementMembers].reverse().map((image, index) => (
            <SwiperSlide key={index}>
              <Box sx={sxStyles.list}>
                <Box sx={sxStyles.imageWrap}>
                  <img
                    src={
                      image.src 
                        ? `../../../image/school/${image.src}`
                        : `../../../image/school/image_achievementList_noImage.webp`
                    }
                    alt=""
                    width="300"
                    height="200"
                  />
                </Box>
                <Box sx={sxStyles.wrap}>
                  <Typography variant="body2" sx={sxStyles.date}>
                    {image.date}
                  </Typography>
                  <Typography variant="body2" sx={sxStyles.grade}>
                    <span>{image.examination}</span>
                    <br />
                    {image.grade}
                  </Typography>
                  <Typography variant="body2" sx={sxStyles.member}>
                    {image.member}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default AchievementList;
