import FadeInOnView from '@/components/FadeInOnView';
import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/system';
import React from 'react';
import { commonSxStyles } from '../components/Style';

type CaseItem = {
  id: string;
  number: string;
  title: React.ReactNode;
  before: string;
  after: React.ReactNode;
};

const caseData: CaseItem[] = [
  {
    id: '1',
    number: '01',
    title: (
      <>
        問い合わせ対応の
        <br />
        効率化
      </>
    ),
    before:
      '担当者が問い合わせメールを一件ずつ確認し、内容に応じて振り分けや返信文の作成を行っている。',
    after: (
      <>
        AIが問い合わせ内容を自動で分類し、FAQや過去の対応履歴をもとに返信案を作成。
        <strong>担当者は内容の確認・修正に集中できる。</strong>
      </>
    ),
  },
  {
    id: '2',
    number: '02',
    title: (
      <>
        経理・事務作業の
        <br />
        効率化
      </>
    ),
    before:
      '請求書や領収書の内容を確認し、金額や取引先情報などを手作業でシステムに入力している。',
    after: (
      <>
        AIが書類から金額や取引先などの必要な情報を読み取り、データを整理。
        <strong>既存システムへの入力作業を効率化できる。</strong>
      </>
    ),
  },
  {
    id: '3',
    number: '03',
    title: (
      <>
        社内ナレッジ検索の
        <br />
        効率化
      </>
    ),
    before:
      '社内規定やマニュアルが複数の場所に保存されており、必要な情報を探すのに時間がかかっている。',
    after: (
      <>
        <strong>AIに質問するだけ</strong>
        で、社内資料から関連情報を検索し、参照元とともに回答。
        必要な情報へスムーズにアクセスできる。
      </>
    ),
  },
  {
    id: '4',
    number: '04',
    title: (
      <>
        SNS投稿・運用の
        <br />
        効率化
      </>
    ),
    before:
      'SNS投稿の企画から文章作成、画像・動画制作までを担当者が手作業で行っている。',
    after: (
      <>
        商品情報や最新情報をもとに、AIが投稿案や文章、画像・動画の素材を生成。担当者による確認を経て、
        <strong>投稿までの流れを効率化できる。</strong>
      </>
    ),
  },
  {
    id: '5',
    number: '05',
    title: (
      <>
        EC商品登録・更新の
        <br />
        効率化
      </>
    ),
    before:
      '新商品の登録時に、商品説明文やカテゴリ、タグなどを担当者が一つずつ作成・設定している。',
    after: (
      <>
        商品情報をもとに
        <strong>
          AIが説明文やタグを生成し、ECサイトの管理システムに下書き登録。
        </strong>
        商品登録・更新作業を効率化できる。
      </>
    ),
  },
  {
    id: '6',
    number: '06',
    title: (
      <>
        売上・顧客データの
        <br />
        分析
      </>
    ),
    before: '売上や顧客データを担当者が集計・分析し、改善点を検討している。',
    after: (
      <>
        <strong>AIが売上傾向や顧客動向を分析</strong>
        し、注目すべき変化や改善施策の候補を提示。
        データに基づく意思決定を支援できる。
      </>
    ),
  },
];

const sxStyles = {
  section: {
    pt: 7,
    pb: 12,
    backgroundColor: commonSxStyles.color.white,
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
  lead: {
    mt: 2,
    textAlign: 'center',
  },
  list: {
    mt: 5,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 3,
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  listItem: {
    background: commonSxStyles.color.white,
    borderRadius: '4px',
    px: 3.5,
    py: 4,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    '@media screen and (max-width:450px)': {
      px: 2.5,
      py: 3,
    },
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr 140px',
    alignItems: 'flex-start',
    gap: 2,
    '@media screen and (max-width:450px)': {
      gridTemplateColumns: '1fr 110px',
    },
  },
  title: {
    '& > span': {
      display: 'block',
    },
    '& br': {
      '@media screen and (max-width:768px)': {
        display: 'none',
      },
    },
  },
  number: {
    color: alpha(commonSxStyles.color.primary, 0.4),
  },
  row: {
    mt: 2,
    '& > dd': {
      mt: 1,
    },
  },
  beforeRow: {
    backgroundColor: alpha(commonSxStyles.color.grayText, 0.08),
    borderRadius: '4px',
    px: 2,
    py: 2,
  },
  afterRow: {
    mt: 1,
    backgroundColor: commonSxStyles.color.background,
    borderRadius: '4px',
    px: 2,
    py: 2,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  label: {
    display: 'inline-block',
    color: commonSxStyles.color.white,
    borderRadius: '4px',
    px: '8px',
    py: '0',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
  },
  beforeLabel: {
    backgroundColor: commonSxStyles.color.grayText,
  },
  afterText: {
    '& > strong': {
      fontWeight: 'bold',
    },
  },
  afterLabel: {
    backgroundColor: commonSxStyles.color.primary,
  },
};

const Case = () => {
  return (
    <Box sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.inner}>
          <Heading2 subText="case" mainText="AI活用事例" />
          <Typography
            sx={[sxStyles.lead, commonSxStyles.typography.normalText]}
          >
            AIを活用することで、さまざまな業務の負担を軽減できます。
          </Typography>
          <Box component="ul" sx={sxStyles.list}>
            {caseData.map((item) => (
              <Box component="li" key={item.id} sx={sxStyles.listItem}>
                <Box sx={sxStyles.header}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={[sxStyles.title, commonSxStyles.typography.heading3]}
                  >
                    <Box component="span" sx={sxStyles.number}>
                      {item.number}
                    </Box>
                    {item.title}
                  </Typography>
                  <Box
                    component="img"
                    src={`/image/demand/ai/case_image_${item.number}.webp`}
                    alt=""
                    width={924}
                    height={748}
                    sx={sxStyles.image}
                  />
                </Box>
                <Box component="dl">
                  <Box sx={[sxStyles.row, sxStyles.beforeRow]}>
                    <Typography
                      component="dt"
                      sx={[sxStyles.label, sxStyles.beforeLabel]}
                    >
                      Before
                    </Typography>
                    <Typography
                      component="dd"
                      sx={commonSxStyles.typography.normalText}
                    >
                      {item.before}
                    </Typography>
                  </Box>
                  <Box sx={[sxStyles.row, sxStyles.afterRow]}>
                    <Typography
                      component="dt"
                      sx={[sxStyles.label, sxStyles.afterLabel]}
                    >
                      After
                    </Typography>
                    <Typography
                      component="dd"
                      sx={[
                        sxStyles.afterText,
                        commonSxStyles.typography.normalText,
                      ]}
                    >
                      {item.after}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Case;
