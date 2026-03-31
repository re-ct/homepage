import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import React from 'react';
import FadeInOnView from '../components/FadeInOnView';
import { CommonLink } from '../../../components/CommonLink';

import {
  CheckCircleOutlined,
  CoPresent,
  CurrencyYen,
  ImportContacts,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { ReactNode } from 'react';

type Point = {
  id: number;
  title: string | ReactNode;
  detail: React.ReactNode[];
};

type Worries = {
  id: number;
  title: string | ReactNode;
  icon: string | ReactNode;
};

const point: Point[] = [
  {
    id: 1,
    title: <>授業は教材の内容に沿うだけ</>,
    detail: [
      <>
        現役エンジニア講師が開発した教材を一式提供しています。
        <br />
        動画教材では、生徒が動画に沿って自分のペースで受講するスタイルなので
        <strong>教える側の手間がありません。</strong>
      </>,
      <>
        教材の内容からサポートするだけなので、
        <strong>特別な指導スキルが必要ない</strong>のもポイントです。
      </>,
      <>
        <CommonLink
          link={{
            href: '#curriculum',
            external: false,
          }}
          gaLabel="feature_curriculum"
        >
          教材について詳しく見る
          <KeyboardArrowDown />
        </CommonLink>
      </>,
    ],
  },
  {
    id: 2,
    title: (
      <>
        月額1万円<span>(税抜) </span>の<br />
        固定ロイヤリティで始めやすい<span>※</span>
      </>
    ),
    detail: [
      <>
        ロイヤリティは、生徒数や売上に関わらず月額固定。
        <br />
        低リスクで高収益を目指せます。
      </>,
      <>
        <CommonLink
          link={{
            href: '#fee',
            external: false,
          }}
          gaLabel="feature_fee"
        >
          契約内容について詳しく見る
          <KeyboardArrowDown />
        </CommonLink>
      </>,
    ],
  },
  {
    id: 3,
    title: <>ライフスタイルに合わせて開講可能</>,
    detail: [
      <>
        週末の数時間や平日の夜のみの稼働でもOKです。
        <br />
        本業や家事と両立しながら、無理なく教室を続けられます。
      </>,
    ],
  },
];

const worries: Worries[] = [
  {
    id: 1,
    title: (
      <>
        <strong>教える事に興味はある</strong>が<br />
        難しいプログラミングは不安
      </>
    ),
    icon: (
      <>
        <CoPresent />
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <strong>空き時間を利用</strong>して、
        <br />
        副収入を得たい
      </>
    ),
    icon: (
      <>
        <CurrencyYen />
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <strong>教材やカリキュラム作り</strong>は<br />
        正直面倒...
      </>
    ),
    icon: (
      <>
        <ImportContacts />
      </>
    ),
  },
];

const sxStyles = {
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: '28px',
    pb: 4,
  },
  wrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
    pt: '120px',
    mt: '-120px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  content: {
    position: 'relative',
    width: '100%',
    backgroundColor: commonSxStyles.color.primary[400],
    pt: 7,
    pb: 10,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '18px solid transparent',
      borderRight: '18px solid transparent',
      borderBottom: '17px solid transparent',
      borderTop: '17px solid' + commonSxStyles.color.white,
    },
  },
  contentWrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  worries: {
    display: 'flex',
    columnGap: '40px',
    alignItems: 'center',
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: '12px',
    },
  },
  worriesList: {
    display: 'flex',
    columnGap: '12px',
    alignItems: 'center',
  },
  worriesIcon: {
    maxWidth: '40px',
    minWidth: '40px',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.15)',
    border: '1px solid' + commonSxStyles.color.white,
    borderRadius: '100px',
    '& > svg': {
      maxWidth: '17px',
    },
  },
  worriesListText: {
    '& > br': {
      '@media screen and (max-width:768px)': {
        display: 'none',
      },
    },
  },
  heading2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (max-width:768px)': {
      justifyContent: 'center',
    },
  },
  subText: {
    color: commonSxStyles.color.white,
    fontSize: '25px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '23px',
    },
  },
  emphasisText: {
    color: commonSxStyles.color.Yellow[300],
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    '@media screen and (max-width:768px)': {
      fontSize: '28px',
    },
    '& > br': {
      display: 'none',
      '@media screen and (max-width:768px)': {
        display: 'block',
      },
    },
  },
  mainText: {
    color: commonSxStyles.color.white,
    fontSize: '30px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '26px',
    },
  },
  ul: {
    mt: 4,
    listStyle: 'none',
  },
  li: {
    display: 'grid',
    p: '32px',
    gridTemplateColumns: '24px 1fr 200px',
    columnGap: '12px',
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '4px',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.15)',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      pt: 3,
      pb: 4,
      alignItems: 'center',
    },
    '& + &': {
      marginTop: '20px',
    },
  },
  icon: {
    gridColumn: '1 / 2',
    gridRow: '1 / 4',
    mt: '4px',
    color: commonSxStyles.color.Orange[400],
    '@media screen and (max-width:768px)': {
      display: 'none',
    },
  },
  liNumber: {
    display: 'none',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      padding: '4px 10px 2px 10px',
      borderRadius: '20px',
      fontSize: '12px',
      lineHeight: 1,
      border: 'solid 1px' + commonSxStyles.color.Orange[400],
      color: commonSxStyles.color.Orange[400],
      fontFamily: 'Arial,sans-serif',
    },
  },
  liTitle: {
    gridColumn: '2 / 3',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:768px)': {
        display: 'block',
      },
    },
    '@media screen and (max-width:768px)': {
      marginTop: '8px',
      textAlign: 'center',
    },
    '& > span': {
      fontSize: '16px',
    },
  },
  liDetailWrap: {
    gridColumn: '1 / 3',
    gridRow: '2/3',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
    mt: '16px',
    '@media screen and (max-width:768px)': {
      alignItems: 'flex-start',
      rowGap: '12px',
      mt: '24px',
    },
  },
  liDetail: {
    a: {
      color: commonSxStyles.color.primary[900],
      textDecoration: 'underline',
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  image: {
    gridColumn: '3 / 4',
    gridRow: '1 / 4',
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'bottom',
    '@media screen and (max-width:768px)': {
      maxWidth: '228px',
      marginTop: '16px',
    },
  },
  note: {
    marginTop: '20px',
    color: commonSxStyles.color.white,
  },
};

const Feature = () => {
  return (
    <>
      <Box sx={sxStyles.section}>
        <Box sx={sxStyles.wrap} id="feature">
          <Box sx={sxStyles.worries} component="ul">
            {worries.map((item) => (
              <React.Fragment key={item.id}>
                <Box component="li" sx={sxStyles.worriesList}>
                  <Box sx={sxStyles.worriesIcon}>{item.icon}</Box>
                  <Typography
                    sx={[
                      sxStyles.worriesListText,
                      commonSxStyles.typography.largeText,
                    ]}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={sxStyles.content}>
        <Box sx={sxStyles.contentWrap}>
          <FadeInOnView>
            <Typography
              variant="h2"
              component="h2"
              sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
            >
              <Typography component="span" sx={[sxStyles.subText]}>
                Re:ProSなら
              </Typography>
              <Typography component="span" sx={[sxStyles.emphasisText]}>
                プログラミング知識は
                <br />
                後からでOK！
                <br />
                教材作りゼロ！
              </Typography>
              <Typography component="span" sx={[sxStyles.mainText]}>
                本部がサポートします。
              </Typography>
            </Typography>
          </FadeInOnView>
          <FadeInOnView>
            <Box sx={sxStyles.ul} component="ul">
              {point.map((item) => (
                <React.Fragment key={item.id}>
                  <Box component="li" sx={sxStyles.li}>
                    <CheckCircleOutlined sx={sxStyles.icon} />
                    <Typography sx={[sxStyles.liNumber]}>
                      POINT {item.id}
                    </Typography>
                    <Typography
                      sx={[
                        sxStyles.liTitle,
                        commonSxStyles.typography.heading3,
                      ]}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      component="img"
                      src={`../../../../image/school/fc/feature_point${item.id}.webp`}
                      alt=""
                      width={900}
                      height={600}
                      sx={sxStyles.image}
                    />
                    <Box sx={sxStyles.liDetailWrap}>
                      {item.detail.map(
                        (text: React.ReactNode, index: number) => (
                          <Typography
                            key={index}
                            sx={[
                              sxStyles.liDetail,
                              commonSxStyles.typography.normalText,
                            ]}
                          >
                            {text}
                          </Typography>
                        ),
                      )}
                    </Box>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
          </FadeInOnView>
          <Typography sx={[sxStyles.note, commonSxStyles.typography.smallText]}>
            ※契約内容およびサポート内容は、予告なく変更となる場合がございます。最終的な契約条件は、必ず個別面談および正式な契約書にてご確認ください。
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Feature;
