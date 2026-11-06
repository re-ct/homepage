import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';

type WorryItem = {
  id: string;
  text: React.ReactNode;
  // しっぽを傾ける向き（下のイラストのほうへ向ける）
  tail: 'left' | 'center' | 'right';
};

const worryData: WorryItem[] = [
  {
    id: '1',
    tail: 'right',
    text: (
      <>
        AI導入の進め方が<br/>分からない
      </>
    ),
  },
  {
    id: '2',
    tail: 'center',
    text: (
      <>
        AIで効率化できる<br/>業務を知りたい
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

// しっぽの傾き（位置はすべて下辺の中央）。right は右下、left は左下に向けて傾ける
const tailStyles = {
  center: {
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  },
  right: {
    borderLeft: '16px solid transparent',
  },
  left: {
    borderRight: '16px solid transparent',
  },
};

const sxStyles = {
  list: {
    mt: 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 3,
    rowGap: 4,
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      rowGap: 2,
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
    px: 3,
    py: 2.5,
    // 2行の吹き出し（16px × 行間1.7 × 2行 + 上下余白）に高さをそろえる
    minHeight: '95px',
    fontWeight: 'bold',
    textAlign: 'center',
    // しっぽにも影が付くよう、box-shadow ではなく drop-shadow を使う
    filter: 'drop-shadow(0px 1px 4px rgba(34, 106, 170, 0.25))',
    // 下のイラストに向けたしっぽ（位置と傾きは tailStyles で指定）
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
      minHeight: 0,
      '&::after': {
        display: 'none',
      },
    },
  },
  placeholder: {
    mt: 5,
    width: '100%',
    maxWidth: '240px',
    aspectRatio: '1 / 1',
    mx: 'auto',
    backgroundColor: '#eee',
    border: '2px dashed #bbb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#888',
    fontSize: '14px',
    p: 2,
    '@media screen and (max-width:768px)': {
      mt: 3,
      maxWidth: '180px',
    },
  },
  conclusion: {
    mt: 6,
    textAlign: 'center',
    color: commonSxStyles.color.primary,
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        '@media screen and (max-width:450px)': {
          pb: 9,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="worry" mainText="こんなお悩みはありませんか？" />
        <Box component="ul" sx={sxStyles.list}>
          {worryData.map((item) => (
            <Typography
              component="li"
              key={item.id}
              sx={[
                sxStyles.bubble,
                { '&::after': tailStyles[item.tail] },
                commonSxStyles.typography.largeText,
              ]}
            >
              {item.text}
            </Typography>
          ))}
        </Box>
        {/* TODO(画像): 悩んでいる担当者のイラスト / 480×480 / public/image/demand/ai/worry_image.webp */}
        <Box sx={sxStyles.placeholder}>
          画像：悩んでいる担当者のイラスト
          <br />
          480×480
          <br />
          worry_image.webp
        </Box>
        <Typography
          sx={[sxStyles.conclusion, commonSxStyles.typography.heading3]}
        >
          その課題、
          <br />
          最適な方法で解決をサポートします。
        </Typography>
      </Box>
    </Box>
  );
};
export default Worry;
