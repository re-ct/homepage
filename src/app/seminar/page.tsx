import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import Box from '@mui/material/Box';
import { seminarTitle } from '@/lib/const/BreadCrumbTitle';
import { SeminarData } from '../../lib/const/Seminar';
import Typography from '@mui/material/Typography';
import { CommonLink } from '../../components/CommonLink';

export const metadata = {
  title: 'セミナー一覧 | 株式会社レクト',
  description: '弊社の知見や最新情報など、多彩なプログラムをご用意しています。',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://re-ct.co.jp/seminar/',
  },
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
  box: {
    mt: '52px',
    '& + &': {
      mt: '72px',
    },
  },
  category: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    gap: '40px 10px',
    mt: 6,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
    '>li >a': {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      columnGap: '20px',
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  section: {
    mt: '72px',
    scrollMarginTop: '100px',
  },
  tag: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '12px',
    color: '#00298A',
    '>p': {
      fontSize: '14px',
    },
  },
  detail: {
    fontSize: '14px',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
  },
  date: {
    fontSize: '14px',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',
  },
  timeLabel: {
    paddingInline: '8px',
    fontSize: '12px',
  },
};

const Seminar = () => {
  const now = new Date();
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '100px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          セミナー一覧
        </Typography>
        <Typography sx={sxStyles.text}>
          弊社の知見や最新情報など、多彩なプログラムをご用意しています。
        </Typography>
        <Box component="ul" sx={sxStyles.list}>
          {SeminarData.map((item) => {
            const isPast = item.dateTime < now;
            return (
              <Box component="li" key={item.id}>
                <CommonLink
                  link={{
                    href: `/seminar/${item.id}`,
                    external: false,
                  }}
                >
                  <img
                    src={`../../../image/download/${item.thumbnail}`}
                    alt=""
                    width="500"
                    height="300"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />

                  <Box sx={sxStyles.wrap}>
                    <Box sx={sxStyles.time}>
                      <Typography
                        sx={{
                          ...sxStyles.timeLabel,
                          backgroundColor: isPast ? '#ECECEC' : '#EFF7FF',
                          color: isPast ? '#545454' : '#00298A',
                        }}
                      >
                        {isPast ? '開催終了' : '受付中'}
                      </Typography>
                      <Typography sx={sxStyles.date}>
                        {item.dateTime.toLocaleString('ja-JP', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                        〜
                      </Typography>
                    </Box>
                    <Typography component="h3" sx={sxStyles.title}>
                      {item.name}
                    </Typography>
                    <Typography component="p" sx={sxStyles.detail}>
                      {item.description}
                    </Typography>
                    <Box sx={sxStyles.tag}>
                      {item.categories.map((cat, index) => (
                        <Typography key={index}># {cat}</Typography>
                      ))}
                    </Box>
                  </Box>
                </CommonLink>
              </Box>
            );
          })}
        </Box>
      </Box>
      <BreadcrumbsNavigation titles={seminarTitle} />
    </main>
  );
};

export default Seminar;
