import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/system';
import React from 'react';
import { commonSxStyles } from '../components/Style';

type ReasonItem = {
  id: string;
  number: string;
  title: React.ReactNode;
  detail: string;
  imageName: string;
};

const reasonData: ReasonItem[] = [
  {
    id: '1',
    number: 'POINT 01',
    title: (
      <>
        実務でAIを活用する
        <br />
        エンジニアが対応
      </>
    ),
    detail:
      '実際の開発・制作現場で培った知見をもとに、情報の取り扱いやセキュリティ面にも配慮した、実現可能なAI活用方法をご提案します。',
    imageName: 'reason_image_01.webp',
  },
  {
    id: '2',
    number: 'POINT 02',
    title: (
      <>
        戦略から実装まで
        <br />
        ワンストップ
      </>
    ),
    detail:
      '課題整理・ツール選定だけでなく、業務自動化やシステム開発まで対応します。',
    imageName: 'reason_image_02.webp',
  },
  {
    id: '3',
    number: 'POINT 03',
    title: (
      <>
        成果が出るまで
        <br />
        伴走可能
      </>
    ),
    detail:
      '導入して終わりではなく、利用状況や効果を確認しながら改善を支援することも可能です。',
    imageName: 'reason_image_03.webp',
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
    pt: 7,
    pb: 12,
    backgroundColor: commonSxStyles.color.background,
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
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  listItem: {
    px: 3,
    '& + &': {
      borderLeft: `solid 1px ${commonSxStyles.color.border}`,
    },
    '@media screen and (max-width:768px)': {
      px: 0,
      py: 4,
      '&:first-of-type': {
        pt: 0,
      },
      '&:last-of-type': {
        pb: 0,
      },
      '& + &': {
        borderLeft: 'none',
        borderTop: `solid 1px ${commonSxStyles.color.border}`,
      },
    },
  },
  number: {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    color: alpha(commonSxStyles.color.primary, 0.4),
  },
  image: {
    display: 'block',
    mt: 2,
    mx: 'auto',
    width: '50%',
    maxWidth: '300px',
    height: 'auto',
    p: 1,
    borderRadius: '50%',
    backgroundColor: alpha(commonSxStyles.color.white, 0.6),
    '@media screen and (max-width:768px)': {
      maxWidth: '200px',
    },
  },
  title: {
    mt: 0.5,
    textAlign: 'center',
  },
  text: {
    mt: 2,
  },
};

const Reason = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.inner}>
        <Heading2
          subText="reason"
          mainText={
            <>
              私たちが選ばれる
              <Box component="br" sx={sxStyles.spBreak} />
              3つの理由
            </>
          }
        />
        <Box component="ul" sx={sxStyles.list}>
          {reasonData.map((item) => (
            <Box component="li" key={item.id} sx={sxStyles.listItem}>
              <Typography
                component="span"
                sx={[sxStyles.number, commonSxStyles.typography.normalText]}
              >
                {item.number}
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={[sxStyles.title, commonSxStyles.typography.heading3]}
              >
                {item.title}
              </Typography>
              <Box
                component="img"
                src={`/image/demand/ai/${item.imageName}`}
                alt=""
                width={300}
                height={300}
                sx={sxStyles.image}
              />
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.normalText]}
              >
                {item.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Reason;
