'use client';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { commonSxStyles } from '../components/Style';
import FadeInOnView from '@/components/FadeInOnView';

type MemberNews = {
  id: number;
  date: string;
  text: string;
};

// 新しい加盟校は先頭に追加する
const memberNews: MemberNews[] = [
  {
    id: 1,
    date: '2026年11月',
    text: '愛知県 犬山校が新しく開校いたしました',
  },
  {
    id: 2,
    date: '2026年10月',
    text: '山田プログラミング教室にご加盟いただきました',
  },
];

// 1行分の高さ（normalText 14px × 行間 1.7）
const lineHeight = '24px';

const sxStyles = {
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: 2,
  },
  wrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 0.5,
    },
  },
  label: {
    flexShrink: 0,
    color: commonSxStyles.color.primary[900],
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.07em',
  },
  // 常に1件だけ見えるように高さを固定する
  slider: {
    flex: 1,
    minWidth: 0,
    width: '100%',
    height: lineHeight,
    overflow: 'hidden',
    '@media screen and (max-width:768px)': {
      // 縦並びのときに flex:1 で縦に伸びないようにする
      flex: 'none',
    },
    '& > .swiper': {
      height: '100%',
    },
  },
  item: {
    display: 'flex',
    gap: 2,
    height: '100%',
    color: commonSxStyles.color.primary[900],
    mt: 0.25,
    '@media screen and (max-width:768px)': {
      gap: 1.5,
      mt: 0,
    },
  },
  date: {
    flexShrink: 0,
    color: commonSxStyles.color.Gray[700],
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: commonSxStyles.color.black,
  },
};

const NewsItem = ({ item }: { item: MemberNews }) => (
  <Box sx={sxStyles.item}>
    <Typography
      component="span"
      sx={[commonSxStyles.typography.normalText, sxStyles.date]}
    >
      {item.date}
    </Typography>
    <Typography
      component="span"
      sx={[commonSxStyles.typography.normalText, sxStyles.text]}
    >
      {item.text}
    </Typography>
  </Box>
);

const MemberInfo = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.wrap}>
          <Box sx={sxStyles.inner}>
            <Typography variant="h2" component="h2" sx={sxStyles.label}>
              ご加盟情報
            </Typography>
            <Box sx={sxStyles.slider}>
              {memberNews.length > 1 ? (
                <Swiper
                  modules={[Autoplay]}
                  direction="vertical"
                  slidesPerView={1}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  allowTouchMove={false}
                >
                  {memberNews.map((item) => (
                    <SwiperSlide key={item.id}>
                      <NewsItem item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                memberNews.map((item) => <NewsItem key={item.id} item={item} />)
              )}
            </Box>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};

export default MemberInfo;
