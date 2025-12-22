import { Box, Typography } from '@mui/material';
import { commonSxStyles } from './components/Style';
import React from 'react';
import FadeInOnView from '../../components/FadeInOnView';
import { ReactNode } from 'react';

type Flow = {
  step: string;
  title: string;
  detail: string | ReactNode;
};

const flow: Flow[] = [
  {
    step: '01',
    title: 'お申し込み',
    detail: (
      <>
        フォームから、現在の状況や抱えているお悩みをお送りいただきます。
        <br />
        転職意欲の有無は問わず、今の率直な気持ちをお聞かせください。
      </>
    ),
  },
  {
    step: '02',
    title: '内容確認と日程調整',
    detail: (
      <>
        アドバイザーが相談内容を確認した後に、
        <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
        オンラインまたはオフラインでの日程を調整します。
      </>
    ),
  },
  {
    step: '03',
    title: 'キャリア相談',
    detail: (
      <>
        あなたのスキル、経験、転職を迷っている背景にあるモヤモヤをヒアリングします。
        <br />
        技術的な話もお任せください。（所要時間30分〜1時間を目安としております）
      </>
    ),
  },
  {
    step: '04',
    title: '次のアクション提案',
    detail: (
      <>
        面談内容に基づき「スキルアップ」「キャリアチェンジ」「現職での経験積み」など、
        <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
        具体的なロードマップを提案します。
      </>
    ),
  },
  {
    step: '05',
    title: '終了または継続',
    detail: (
      <>
        不安が解消されれば終了です。
        <br />
        さらに深掘りした相談や継続的なサポートが必要であれば、次回の面談日程を調整します。
      </>
    ),
  },
];

const sxStyles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
    width: '100%',
    marginTop: '40px',
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    columnGap: '54px',
    alignItems: 'center',
    padding: '24px',
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '8px',
    width: '100%',
    flexWrap: 'wrap',
    position: 'relative',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '16px',
    },
    '&:not(:last-of-type)': {
      mb: 3,
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '34px',
        bottom: '-24px',
        width: '1px',
        height: '24px',
        backgroundColor: commonSxStyles.color.primary,
      },
    },
  },
  flowWrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.background,
    paddingBlock: '80px 110px',
  },
  contentArea: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    pt: '120px',
    mt: '-120px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  heading2: {
    textAlign: 'center',
  },
  stepTitle: {
    fontWeight: 'bold',
  },
  stepDetail: {
    fontSize: '14px',
    letterSpacing: '0.02em',
    lineHeight: '1.6',
  },
  step: {
    fontFamily: 'Arial,sans-serif',
    mr: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: commonSxStyles.color.primary,
  },
};

const Flow = () => {
  return (
    <Box sx={sxStyles.flowWrap}>
      <FadeInOnView>
        <Box sx={sxStyles.contentArea} id="flow">
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
          >
            ご利用の流れ
          </Typography>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ol"
          >
            {flow.map((item) => (
              <Box component="li" sx={sxStyles.listItem} key={item.step}>
                <Typography
                  sx={[sxStyles.stepTitle, commonSxStyles.typography.largeText]}
                >
                  <Typography component="span" sx={[sxStyles.step]}>
                    {item.step}
                  </Typography>
                  {item.title}
                </Typography>
                {item.detail && (
                  <Typography sx={[sxStyles.stepDetail]}>
                    {item.detail}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Flow;
