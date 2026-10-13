import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import manager from '../../../../public/image/school/fc/about_manager.webp';
import FadeInOnView from '../../../components/FadeInOnView';

const courses = [
  {
    id: 'roblox',
    title: 'Robloxコース',
    description:
      'テキストプログラミング言語の「Luau」を用いて、Robloxの世界でゲーム開発をしながらプログラミングを学びます。主に、キーボードを使用してプログラミングを行うコースです。',
    styleLabel: '動画教材',
    styleDetail: (
      <>
        授業はすべて動画教材が担当。
        <br />
        講師は、生徒のフォローや質問への回答を動画の内容からサポートするだけでOKです。
      </>
    ),
    image: 'curriculum_movie',
  },
  {
    id: 'scratch',
    title: 'Scratchコース',
    description:
      'ビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます。マウス操作で行うので、難しいコードは不要です。',
    styleLabel: 'テキスト教材',
    styleDetail: (
      <>
        授業の流れや解説がすべてテキストにまとまっているため、内容に沿って指導するだけでOKです。
      </>
    ),
    image: 'curriculum_text',
  },
];

const sxStyles = {
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: 10,
    pb: 10,
    '@media screen and (max-width:450px)': {},
  },
  sectionWrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
    paddingTop: '120px',
    marginTop: '-120px',
    '@media screen and (max-width:450px)': {
      maxWidth: '100%',
    },
  },
  heading: {
    color: commonSxStyles.color.black,
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
  introduction: {
    textAlign: 'center',
    mt: '16px',
  },
  courseList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto auto 1fr',
    gap: '20px',
    listStyle: 'none',
    mt: '32px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  courseItem: {
    display: 'grid',
    gridTemplateRows: 'subgrid',
    gridRow: 'span 3',
    border: 'solid 1px ' + commonSxStyles.color.Gray[300],
    padding: '28px 20px 24px',
    borderRadius: '8px',
    rowGap: '16px',
  },
  courseTitle: {
    textAlign: 'center',
    gridRow: '1',
  },
  description: {
    gridRow: '2',
    m: 0,
  },
  dl: {
    gridRow: '3',
    m: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  dt: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    color: commonSxStyles.color.Gray[800],
    '&::after': {
      content: '""',
      flexGrow: 1,
      height: '1px',
      backgroundColor: commonSxStyles.color.Gray[300],
      marginLeft: '8px',
    },
  },
  dd: {
    mt: '12px',
    display: 'grid',
    gridTemplateColumns: '258fr 130fr',
    columnGap: '12px',
    marginInlineStart: 0,
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr 100px',
    },
  },
  styleLabel: {
    fontWeight: 'bold',
  },
  styleDetail: {
    mt: '8px',
  },
  voice: {
    display: 'grid',
    gridTemplateColumns: '1fr 90px',
    gap: '26px',
    mt: 4,
    '@media screen and (max-width:450px)': {
      gridTemplateColumns: '1fr 77px',
    },
  },
  voiceWrap: {
    backgroundColor: commonSxStyles.color.primary[100],
    py: 3,
    px: 3,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '50%',
      right: '-18px',
      transform: 'translateY(-50%)',
      borderTop: 'solid 9px transparent',
      borderBottom: 'solid 9px transparent',
      borderLeft: 'solid 20px' + commonSxStyles.color.primary[100],
      '@media screen and (max-width:450px)': {
        bottom: 'auto',
        top: '40px',
      },
    },
  },
  voiceHuman: {
    color: commonSxStyles.color.primary[900],
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
    alignItems: 'center',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    '& > p': {
      fontWeight: 'bold',
    },
  },
  strong: {
    fontWeight: 'bold',
  },
};

const Curriculum = () => {
  return (
    <Box sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.sectionWrap} id="curriculum">
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading, commonSxStyles.typography.heading2]}
          >
            教材について
          </Typography>
          <Box
            sx={[sxStyles.introduction, commonSxStyles.typography.normalText]}
          >
            当教室では、2つのプログラミング言語に対応。
            <br />
            オーナー様の運営スタイルに合わせて、どちらか一方あるいは両方を自由に組み合わせて開講いただけます。
          </Box>
          <Box component="ul" sx={sxStyles.courseList}>
            {courses.map((course) => (
              <Box key={course.id} component="li" sx={sxStyles.courseItem}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={[
                    sxStyles.courseTitle,
                    commonSxStyles.typography.heading3,
                  ]}
                >
                  {course.title}
                </Typography>

                <Typography
                  sx={[
                    sxStyles.description,
                    commonSxStyles.typography.normalText,
                  ]}
                >
                  {course.description}
                </Typography>

                <Box component="dl" sx={sxStyles.dl}>
                  <Box
                    component="dt"
                    sx={[sxStyles.dt, commonSxStyles.typography.smallText]}
                  >
                    教材スタイル
                  </Box>
                  <Box component="dd" sx={sxStyles.dd}>
                    <Box>
                      <Typography
                        sx={[
                          commonSxStyles.typography.normalText,
                          sxStyles.styleLabel,
                        ]}
                      >
                        {course.styleLabel}
                      </Typography>
                      <Typography
                        sx={[
                          commonSxStyles.typography.smallText,
                          sxStyles.styleDetail,
                        ]}
                      >
                        {course.styleDetail}
                      </Typography>
                    </Box>
                    <img
                      src={`../../../../image/school/fc/${course.image}.webp`}
                      alt=""
                      width={520}
                      height={400}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={sxStyles.voice}>
            <Box sx={sxStyles.voiceWrap}>
              <Typography
                component="p"
                sx={commonSxStyles.typography.normalText}
              >
                Re:ProSの教材は、
                <strong>現役エンジニアがカリキュラムをゼロから設計</strong>
                しています。
              </Typography>
              <Typography
                component="p"
                sx={commonSxStyles.typography.normalText}
              >
                ビジュアルプログラミングから本格的なテキストプログラミングまで一貫して学べる体制だからこそ
                <br />
                高い継続率と集客力を実現できると考えています。
              </Typography>
            </Box>
            <Box sx={sxStyles.voiceHuman}>
              <Box
                component="img"
                src={manager.src}
                alt=""
                width={160}
                height={160}
              />
              <Typography
                component="p"
                sx={commonSxStyles.typography.smallText}
              >
                Re:ProS 塾長
              </Typography>
            </Box>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Curriculum;
