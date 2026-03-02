import { Box, Typography } from '@mui/material';
import Heading2 from '../components/Heading2';
import { commonSxStyles } from '../components/Style';
import { ReactNode } from 'react';
import React from 'react';

type Point = {
  id: number;
  title: string | ReactNode;
  detail: string | ReactNode;
  note?: string;
};

const point: Point[] = [
  {
    id: 1,
    title: <>Webバナー広告での配信</>,
    detail: (
      <>
        広告枠で、ユーザーを惹きつける動くバナーとして配信。
        <br />
        静止画では伝えきれない商品の魅力も、スワイプやタップを介することで能動的に伝えられます。
      </>
    ),
    note: '※各広告プラットフォームの利用条件については、お客様にて事前にご確認ください。',
  },
  {
    id: 2,
    title: <>Webサイト・LPへの埋め込み</>,
    detail: (
      <>
        今あるWebサイトの1セクションに「商品診断」や「ビフォー・アフターのスライダー」を設置。サイト全体を改修することなく、一部をインタラクティブ化できます。
      </>
    ),
  },
  {
    id: 3,
    title: <>営業・対面イベントでの体験型ツール</>,
    detail: (
      <>
        展示会のタブレット接客や、営業先でのプレゼン資料として。
        <br />
        インターネットに繋がらない環境でも、オフライン用のファイルを端末に入れておけば、問題なく動作します。
      </>
    ),
  },
];

const sxStyles = {
  ul: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
    mt: '32px',
    '@media screen and (max-width:768px)': {
      rowGap: '52px',
    },
  },
  li: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    columnGap: '20px',
    alignItems: 'center',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '20px',
    },
  },
  liDetail: {
    mt: '12px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  note: {
    color: commonSxStyles.color.grayText,
    mt: '8px',
  },
};

const Plan = () => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 12,
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
        <Heading2 subText="case" mainText="利用シーン" />
        <Box sx={sxStyles.ul} component="ul">
          {point.map((item) => (
            <React.Fragment key={item.id}>
              <Box component="li" sx={sxStyles.li}>
                <Box>
                  <Typography sx={commonSxStyles.typography.heading3}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={[
                      sxStyles.liDetail,
                      commonSxStyles.typography.normalText,
                    ]}
                  >
                    {item.detail}
                  </Typography>
                  {item.note && (
                    <Typography
                      sx={[sxStyles.note, commonSxStyles.typography.smallText]}
                    >
                      {item.note}
                    </Typography>
                  )}
                </Box>
                <Box
                  component="img"
                  src={`../../../../image/demand/ad/case_${item.id}.webp`}
                  width={900}
                  height={450}
                  sx={sxStyles.image}
                />
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Plan;
