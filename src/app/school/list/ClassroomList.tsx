import { Box, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CommonLink } from '@/components/CommonLink';
import { commonSxStyles } from '../components/Style';

type Classroom = {
  id: string;
  name: string;
  detailHref?: string;
  postalCode: string;
  address: string;
  tel: string;
  courses: string[];
  hours: string;
  image: string;
};

const classroomList: Classroom[] = [
  {
    id: 'toyokawa',
    name: 'Re:ProS 豊川本校',
    detailHref: '/school/',
    postalCode: '〒441-0312',
    address: '愛知県豊川市御津町西方日暮50番地9',
    tel: '090-0000-2222',
    courses: [
      'Scratch 初級',
      'Roblox ゲーム開発 中級',
      'ソフトウェア開発 中級',
    ],
    hours: '月〜金 17:00〜18:00',
    // TODO(画像): 教室の写真 / 600×450 / public/image/school/classroom_toyokawa.webp
    image: 'classroom_toyokawa.webp',
  },
];

const sxStyles = {
  heading1: {
    backgroundImage:
      'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)',
    pt: 5,
    pb: 3,
    px: 3,
    color: commonSxStyles.color.black,
  },
  heading1Inner: {
    maxWidth: '900px',
    mx: 'auto',
  },
  title: {
    fontSize: '2rem',
    lineHeight: 1.5,
    fontWeight: 700,
  },
  lead: {
    mt: 2,
    color: commonSxStyles.color.black,
  },
  wrap: {
    pt: 3,
    pb: 9,
    mx: 'auto',
    width: '100%',
    maxWidth: '900px',
  },
  list: {
    listStyle: 'none',
  },
  card: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: "'name image' 'details image'",
    columnGap: 4,
    alignItems: 'start',
    borderBottom: 'solid 1px #CCCCCC',
    textAlign: 'left',
    pt: 3,
    pb: 4,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr 120px',
      gridTemplateRows: 'auto auto',
      gridTemplateAreas: "'name image' 'details details'",
      columnGap: 2,
      p: 3,
    },
  },
  name: {
    color: commonSxStyles.color.black,
  },
  nameWrap: {
    gridArea: 'name',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: 2,
    rowGap: 0.5,
  },
  detailLink: {
    '& > a': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: 1.75,
      py: 0.5,
      px: 2,
      borderRadius: 8,
      border: `solid 1px ${commonSxStyles.color.Orange[400]}`,
      backgroundColor: commonSxStyles.color.white,
      color: commonSxStyles.color.Orange[400],
      transition: 'filter 0.3s',
      '&:hover': {
        filter: 'brightness(0.9)',
      },
    },
    '& svg': {
      width: '20px',
      height: '20px',
      color: commonSxStyles.color.Orange[400],
    },
  },
  details: {
    gridArea: 'details',
    mt: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  row: {
    display: 'flex',
    alignItems: 'stretch',
    '&:last-child': {
      borderBottom: 'none',
    },
    '& > dt': {
      flexShrink: 0,
      width: '90px',
      backgroundColor: '#EEF3FF',
      color: commonSxStyles.color.primary[900],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      py: '2px',
      px: 1,
      fontSize: '12px',
      '& > br': {
        display: 'none',
      },
      '@media screen and (max-width:768px)': {
        width: '70px',
        px: 1,
        flexDirection: 'column',
        '& > br': {
          display: 'block',
        },
      },
    },
    '& > dd': {
      color: commonSxStyles.color.black,
      px: 2,
      py: 1,
      fontSize: '14px',
    },
  },
  courseList: {
    listStyle: 'none',
  },
  mapLink: {
    mt: 0.5,
    '& > a': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.5,
      color: commonSxStyles.color.primary[400],
      transition: 'opacity 0.3s linear',
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& svg': {
      width: '16px',
      height: '16px',
    },
  },
  telLink: {
    color: 'inherit',
  },
  image: {
    gridArea: 'image',
    width: '100%',
    aspectRatio: '4 / 3',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    '& > img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
};

const ClassroomList = () => {
  return (
    <Box component="section">
      <Box sx={sxStyles.heading1}>
        <Box sx={sxStyles.heading1Inner}>
          <Typography variant="h1" component="h1" sx={sxStyles.title}>
            開講教室一覧
          </Typography>
          <Typography
            component="p"
            sx={[sxStyles.lead, commonSxStyles.typography.normalText]}
          >
            Re:ProSのプログラミングコースを受講できる教室をご紹介します。
          </Typography>
        </Box>
      </Box>
      <Box sx={sxStyles.wrap}>
        <Box component="ul" sx={sxStyles.list}>
          {classroomList.map((classroom) => (
            <Box component="li" key={classroom.id} sx={sxStyles.card}>
              <Box sx={sxStyles.nameWrap}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={[sxStyles.name, commonSxStyles.typography.heading3]}
                >
                  {classroom.name}
                </Typography>
                {classroom.detailHref && (
                  <Box sx={sxStyles.detailLink}>
                    <CommonLink
                      link={{ href: classroom.detailHref, external: false }}
                      gaLabel={`schoolList_detail_${classroom.id}`}
                    >
                      教室詳細
                      <PlayCircleIcon />
                    </CommonLink>
                  </Box>
                )}
              </Box>
              <Box
                component="dl"
                sx={[sxStyles.details, commonSxStyles.typography.normalText]}
              >
                <Box sx={sxStyles.row}>
                  <dt>住所</dt>
                  <dd>
                    {classroom.postalCode}
                    <br />
                    {classroom.address}
                    <Box sx={sxStyles.mapLink}>
                      <CommonLink
                        link={{
                          href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(classroom.address)}`,
                          external: true,
                        }}
                        gaLabel={`schoolList_map_${classroom.id}`}
                      >
                        GoogleMapで見る
                        <OpenInNewIcon />
                      </CommonLink>
                    </Box>
                  </dd>
                </Box>
                <Box sx={sxStyles.row}>
                  <dt>電話番号</dt>
                  <dd>
                    <Box
                      component="a"
                      href={`tel:${classroom.tel}`}
                      sx={sxStyles.telLink}
                    >
                      {classroom.tel}
                    </Box>
                  </dd>
                </Box>
                <Box sx={sxStyles.row}>
                  <dt>
                    対応
                    <br />
                    コース
                  </dt>
                  <dd>
                    <Box component="ul" sx={sxStyles.courseList}>
                      {classroom.courses.map((course) => (
                        <li key={course}>・{course}</li>
                      ))}
                    </Box>
                  </dd>
                </Box>
                <Box sx={sxStyles.row}>
                  <dt>開講時間</dt>
                  <dd>{classroom.hours}</dd>
                </Box>
              </Box>
              <Box sx={sxStyles.image}>
                <img
                  src={`/image/school/${classroom.image}`}
                  alt={`${classroom.name}の教室の様子`}
                  width="600"
                  height="450"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClassroomList;
