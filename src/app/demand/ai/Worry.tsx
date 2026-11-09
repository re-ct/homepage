import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';

type WorryItem = {
  id: string;
  text: React.ReactNode;
  tail: 'left' | 'center' | 'right';
};

const worryData: WorryItem[] = [
  {
    id: '1',
    tail: 'right',
    text: (
      <>
        AI導入の進め方が
        <br />
        分からない
      </>
    ),
  },
  {
    id: '2',
    tail: 'center',
    text: (
      <>
        AIで効率化できる
        <br />
        業務を知りたい
      </>
    ),
  },
  {
    id: '3',
    tail: 'left',
    text: (
      <>
        社内にAIに詳しい
        <br />
        人材やエンジニアがいない
      </>
    ),
  },
  {
    id: '4',
    tail: 'right',
    text: (
      <>
        ChatGPT等を導入したものの
        <br />
        活用が進まない
      </>
    ),
  },
  {
    id: '5',
    tail: 'left',
    text: (
      <>
        AIを使いたいが、情報漏洩や
        <br />
        セキュリティ面が不安
      </>
    ),
  },
];

const sxStyles = {
  spBreak: {
    display: 'none',
    '@media screen and (max-width:768px)': {
      display: 'block',
    },
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    pt: 7,
    pb: 12,
    '@media screen and (max-width:450px)': {
      pb: 9,
    },
  },
  inner: {
    maxWidth: '940px',
    width: '100%',
    mx: 'auto',
    px: 2.5,
  },
  list: {
    mt: 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 3,
    rowGap: 4,
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      position: 'relative',
      flexDirection: 'column',
      rowGap: 0,
      px: 3,
      py: 2,
      backgroundColor: commonSxStyles.color.white,
      borderRadius: '16px',
      filter: 'drop-shadow(0px 1px 3px rgba(34, 106, 170, 0.25))',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderTop: `16px solid ${commonSxStyles.color.white}`,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
      },
    },
  },
  bubble: {
    position: 'relative',
    flex: '0 0 calc((100% - 48px) / 3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '16px',
    px: 2,
    py: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    filter: 'drop-shadow(0px 1px 3px rgba(34, 106, 170, 0.25))',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderTop: `16px solid ${commonSxStyles.color.white}`,
    },
    '@media screen and (max-width:768px)': {
      flex: '0 0 auto',
      display: 'block',
      minHeight: 0,
      pl: '1em',
      pr: 0,
      py: 1,
      textAlign: 'left',
      borderRadius: 0,
      filter: 'none',
      '& > br': {
        display: 'none',
      },
      '&::before': {
        content: '"・"',
        position: 'absolute',
        top: '8px',
        left: 0,
      },
      '& + &': {
        borderTop: `solid 1px ${commonSxStyles.color.border}`,
      },
      '&::after': {
        display: 'none',
      },
    },
  },
  tail: {
    center: {
      '&::after': {
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
      },
    },
    right: {
      '&::after': {
        borderLeft: '16px solid transparent',
      },
    },
    left: {
      '&::after': {
        borderRight: '16px solid transparent',
      },
    },
  },
  image: {
    display: 'block',
    mt: 5,
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
    mx: 'auto',
    '@media screen and (max-width:768px)': {
      mt: 3,
      maxWidth: '180px',
    },
  },
  conclusion: {
    mt: 6,
    textAlign: 'center',
    fontSize: '28px',
    color: commonSxStyles.color.primary,
    '@media screen and (max-width:768px)': {
      fontSize: '20px',
    },
    '&::before': {
      content: '""',
      display: 'block',
      width: 0,
      height: 0,
      mx: 'auto',
      mb: 2,
      borderTop: `20px solid ${commonSxStyles.color.primary}`,
      borderLeft: '40px solid transparent',
      borderRight: '40px solid transparent',
    },
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
};

const Worry = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.inner}>
        <Heading2
          subText="worry"
          mainText={
            <>
              こんなお悩みは
              <Box component="br" sx={sxStyles.spBreak} />
              ありませんか？
            </>
          }
        />
        <Box component="ul" sx={sxStyles.list}>
          {worryData.map((item) => (
            <Typography
              component="li"
              key={item.id}
              sx={[
                sxStyles.bubble,
                sxStyles.tail[item.tail],
                commonSxStyles.typography.largeText,
              ]}
            >
              {item.text}
            </Typography>
          ))}
        </Box>
        <Box
          component="img"
          src="/image/demand/ai/worry_image.webp"
          alt=""
          width={480}
          height={480}
          sx={sxStyles.image}
        />
        <Typography
          sx={[commonSxStyles.typography.heading3, sxStyles.conclusion]}
        >
          そのお悩み、
          <br />
          最適な方法でサポートいたします
        </Typography>
      </Box>
    </Box>
  );
};
export default Worry;
