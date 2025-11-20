import { Box, colors, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import Link from '@mui/material/Link';
import pcImage from '../../../../public/image/school/fc/aboutScratch_pcImage.webp';
import manager from '../../../../public/image/school/fc/aboutScratch_manager.webp';

const sxStyles = {
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: 7,
    pb: 10,
    '@media screen and (max-width:450px)': {},
  },
  sectionWrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
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
  textLink: {
    '& a': {
      color: commonSxStyles.color.black,
      '&:hover': {
        color: commonSxStyles.color.black,
      }
    }
  },
  contents: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '36px',
    mt: 7,
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      '@media screen and (max-width:768px)': {
        maxWidth: '90%',
      },
    },
  },
  contentsText: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
    '& small': {
      '& a': {
        color: commonSxStyles.color.black,
      },
    },
  },
  voice: {
    display: 'grid',
    gridTemplateColumns: '1fr 90px',
    gap: '26px',
    mt: 6,
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

const AboutScratch = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.sectionWrap}>
        <Typography
          variant="h2"
          component="h2"
          sx={[sxStyles.heading, commonSxStyles.typography.heading2]}
        >
          Scratchに
          <br />
          特化している理由
        </Typography>
        <Box sx={sxStyles.contents}>
          <Box sx={sxStyles.contentsText}>
            <Typography component="p" sx={commonSxStyles.typography.normalText}>
              Scratchは、アメリカのマサチューセッツ工科大学(MIT)メディアラボが開発したコーディング言語です。70以上の言語で利用可能で、
              <Typography
                component="strong"
                sx={[sxStyles.strong, commonSxStyles.typography.normalText]}
              >
                世界中の教育機関で採用されています。
              </Typography>
              ※
            </Typography>
            <Typography component="p" sx={commonSxStyles.typography.normalText}>
              日本では2020年に小学校でのプログラミング必修化、2025年度からは大学入学共通テストへの「情報」科目が導入されました。
            </Typography>
            <Typography component="p" sx={commonSxStyles.typography.normalText}>
              プログラミング教育が加速している中、プログラミング学習の最初の一歩としてScratchを習得してほしいと考えているからです。
            </Typography>
            <Typography
              component="small"
              sx={[sxStyles.textLink,commonSxStyles.typography.smallText]}
            >
              ※出典： Scratch公式サイト（{' '}
              <Link
                href="https://scratch.mit.edu/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://scratch.mit.edu/about{' '}
              </Link>{' '}
              ）
            </Typography>
          </Box>
          <Box
            component="img"
            src={pcImage.src}
            alt=""
            width={600}
            height={376}
          />
        </Box>
        <Box sx={sxStyles.voice}>
          <Box sx={sxStyles.voiceWrap}>
            <Typography component="p" sx={commonSxStyles.typography.normalText}>
              Scratchを通して生徒自身の発想力や自発性が鍛えられます。
            </Typography>
            <Typography component="p" sx={commonSxStyles.typography.normalText}>
              教室では、生徒自身が自分たちで「あれを作ってみたい！」「これを作ってみたい！」と試行錯誤しながら楽しくゲームを作っていく姿が見られています。
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
            <Typography component="p" sx={commonSxStyles.typography.smallText}>
              Re:ProS 塾長
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutScratch;
