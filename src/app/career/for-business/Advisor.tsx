import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import FadeInOnView from '../../../components/FadeInOnView';
import { ReactNode } from 'react';

export type advisorProfile = {
  id: string | number;
  nameKanji: string;
  image: string;
  sections: {
    heading: string;
    content: ReactNode;
  }[];
};

const advisors: advisorProfile[] = [
  {
    id: 'advisor-01',
    nameKanji: '渡辺 優樹',
    image: 'watanabe',
    sections: [
      {
        heading: '経歴',
        content: (
          <>
            <p>
              名古屋大学大学院
              情報学研究科修了後、プライム上場企業にて5年間Webエンジニアとして勤務。
              <br />
              5人のメンバーのマネジメント、数十名以上のエンジニアの採用にも携わってきました。
              <br />
              新卒採用・中途採用共に面接や書類選考を通して見極めてきた経験があります。
            </p>
            <p>
              現在はプログラミング教室の講師をしながら、Webエンジニアとして多様な開発案件を経験しています。
            </p>
          </>
        ),
      },
      {
        heading: '強み',
        content: (
          <>
            <h5>現場を知る現役エンジニア</h5>
            <p>
              現役エンジニアだからこそ、最新の技術トレンドや開発現場のリアルな課題を深く理解。
              <br />
              一般的なキャリアアドバイザーでは見抜けない、貴社の開発環境に直結する技術力を見極めます。
            </p>
            <h5>Web技術全方位の経験あり</h5>
            <p>
              インフラからバックエンド、フロントエンドまで、Web開発全体の構造を網羅。
              <br />
              単一の言語だけでなくプロダクト全体のアーキテクチャを見据えた上で、貴社の要件に適合する人材を厳選します。
            </p>
          </>
        ),
      },
      {
        heading: '保有資格',
        content: (
          <ul>
            <li>高等学校教諭一種免許状「情報」 免許保有</li>
            <li>基本情報技術者 資格保有</li>
          </ul>
        ),
      },
    ],
  },
];

const sxStyles = {
  wrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    paddingBlock: '80px 110px',
  },
  contentArea: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  heading2: {
    textAlign: 'center',
  },
  listItem: {
    marginTop: '40px',
    display: 'grid',
    gridTemplateColumns: '222px 1fr',
    columnGap: '32px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
    '& + &': {
      marginTop: '60px',
      '@media screen and (max-width:768px)': {
        marginTop: '48px',
      },
    },
  },
  listItemImage: {
    '& img': {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
  },
  contents: {
    '@media screen and (max-width:768px)': {
      marginTop: '32px',
    },
  },
  contentsWrap: {
    marginTop: '16px',
    '& + &': {
      marginTop: '24px',
    },
  },
  contentsTitle: {
    color: commonSxStyles.color.primary,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      width: 'calc(100% - 40px)',
      height: '1px',
      backgroundColor: commonSxStyles.color.primary,
      display: 'inline-block',
    },
  },
  contentsText: {
    marginTop: '12px',
    '& > h5': {
      fontSize: '14px',
      '&:not(:nth-of-type(1))': {
        marginTop: '16px',
      },
    },
    '& > p': {
      marginTop: '4px',
    },
    '& > ul': {
      listStylePosition: 'inside',
    },
  },
};

const Advisor = () => {
  return (
    <Box sx={sxStyles.wrap}>
      <FadeInOnView>
        <Box sx={sxStyles.contentArea} id="advisors">
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
          >
            アドバイザーについて
          </Typography>
          {advisors.map((advisor) => (
            <Box key={advisor.id} sx={sxStyles.listItem}>
              <Box>
                <Box component="picture" sx={sxStyles.listItemImage}>
                  <source
                    srcSet={`../../../../../image/career/advisors_${advisor.image}_sp.webp`}
                    media="(max-width: 768px)"
                    width="700"
                    height="400"
                  />
                  <Box
                    component="img"
                    src={`../../../../../image/career/advisors_${advisor.image}_pc.webp`}
                    alt={`${advisor.nameKanji}のプロフィール写真`}
                    width="444"
                    height="444"
                  />
                </Box>
              </Box>
              <Box sx={sxStyles.contents}>
                <Typography
                  component="h3"
                  sx={commonSxStyles.typography.heading3}
                >
                  {advisor.nameKanji}
                </Typography>
                {advisor.sections.map((section, index) => (
                  <Box key={index} sx={sxStyles.contentsWrap}>
                    <Typography
                      component="h4"
                      sx={[
                        sxStyles.contentsTitle,
                        commonSxStyles.typography.normalText,
                      ]}
                    >
                      {section.heading}
                    </Typography>
                    <Box
                      sx={[
                        sxStyles.contentsText,
                        commonSxStyles.typography.normalText,
                      ]}
                    >
                      {section.content}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Advisor;
