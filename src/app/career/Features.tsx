'use client';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from './components/Style';
import { ReactNode } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FadeInOnView from '../../components/FadeInOnView';

export type CaseStudy = {
  id: string | number;
  mainTitle: ReactNode;
  image: string;
  troubles: ReactNode[];
  solutions: {
    content: ReactNode;
  }[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    mainTitle: (
      <>
        自分のエンジニアスキルに
        <br />
        自信がない...
      </>
    ),
    image: 'feature_case1',
    troubles: [
      <>
        自分のスキルが市場で通用するのか
        <br />
        分からない
      </>,
      <>面接で、技術的な質問にうまく答えられるか不安</>,
    ],
    solutions: [
      {
        content: (
          <>
            <Box component="strong">エンジニア目線でスキルを評価し</Box>
            <br />
            具体的な成長パスを提示します。
          </>
        ),
      },
      {
        content: (
          <>
            書類添削だけでなく、
            <br />
            <Box component="strong">コードレビューや技術支援、</Box>
            <br />
            技術面接の練習相手になります。
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    mainTitle: (
      <>
        キャリアチェンジを
        <br />
        考えている
      </>
    ),
    image: 'feature_case2',
    troubles: [
      <>
        バックエンドからフロントエンドへ
        <br />
        移りたいが、必要なスキルが分からない
      </>,
      <>
        デザイナーから、コーディングができる
        <br />
        エンジニアになりたい
      </>,
    ],
    solutions: [
      {
        content: (
          <>
            <Box component="strong">学習ロードマップの提示</Box>や、
            <br />
            <Box component="strong">スキル獲得の支援</Box>を行います。
          </>
        ),
      },
      {
        content: (
          <>
            <Box component="strong">市場のリアルな情報</Box>を
            <br />
            具体的にお伝えします。
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    mainTitle: (
      <>
        エンジニアスキルを
        <br />
        向上したい！
      </>
    ),
    image: 'feature_case3',
    troubles: [
      <>
        今より裁量権のある開発環境で
        <br />
        働きたい
      </>,
      <>
        最新の技術スタックを使っている
        <br />
        企業に転職したい
      </>,
    ],
    solutions: [
      {
        content: (
          <>
            スキルや志向に合わせて、
            <br />
            <Box component="strong">成長できる企業を紹介</Box>できます。
          </>
        ),
      },
      {
        content: (
          <>
            求人票だけでは分からない、
            <br />
            企業の開発文化や技術的な内容を
            <br />
            <Box component="strong">深く掘り下げて</Box>伝えられます。
          </>
        ),
      },
    ],
  },
];
const sxStyles = {
  section: {
    backgroundColor: commonSxStyles.color.background,
    paddingBlock: '80px',
  },
  wrap: {
    maxWidth: '1132px',
    paddingInline: '16px',
    marginInline: 'auto',
  },
  heading2: {
    textAlign: 'center',
  },
  list: {
    marginTop: '52px',
    display: 'grid',
    marginInline: 'auto',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '20px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gap: '52px',
    },
  },
  listItem: {
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '4px',
    paddingTop: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  listImage: {
    maxWidth: '144px',
    height: 'auto',
    marginTop: '8px',
  },
  listPoint: {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: commonSxStyles.color.black,
    color: commonSxStyles.color.white,
    borderRadius: '50px',
    padding: '6px 20px 4px',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  listTitle: {
    textAlign: 'center',
  },
  listTrouble: {
    marginTop: '16px',
    listStyle: 'none',
    width: '100%',
    paddingInline: '24px',
    '& > li': {
      display: 'flex',
      alignItems: 'flex-start',
      columnGap: '10px',
      '& br': {
        '@media screen and (max-width:768px)': {
          display: 'none',
        },
      },
      '&::before': {
        content: '""',
        display: 'inline-block',
        marginTop: '8px',
        maxWidth: '6px',
        minWidth: '6px',
        aspectRatio: '1 / 1',
        backgroundColor: commonSxStyles.color.black,
        borderRadius: '30px',
      },
      '& + li': {
        marginTop: '4px',
      },
    },
  },
  listSolutions: {
    marginTop: '30px',
    background: 'linear-gradient(to right, #407BFF 0%, #012D97 100%)',
    padding: '40px 24px',
    width: '100%',
    color: commonSxStyles.color.white,
    fontWeight: 'bold',
    height: '100%',
    borderRadius: '0 0 4px 4px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '11px solid transparent',
      borderRight: '11px solid transparent',
      borderBottom: '11px solid transparent',
      borderTop: '11px solid' + commonSxStyles.color.white,
    },
  },
  listSolutionItem: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '8px',
    '& p': {
      fontWeight: 'bold',
    },
    '& strong': {
      color: '#FFF652',
    },
    '& svg': {
      width: '20px',
    },
    '& + &': {
      marginTop: '16px',
    },
  },
};

const Features = () => {
  return (
    <Box sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.wrap}>
          <Typography
            variant="h2"
            component="h2"
            sx={[commonSxStyles.typography.heading2, sxStyles.heading2]}
          >
            こんなお悩みを
            <br />
            サポートいたします
          </Typography>
          <Box sx={sxStyles.list} component="ul">
            {caseStudies.map((item) => (
              <Box key={item.id} component="li" sx={sxStyles.listItem}>
                <Typography component="p" sx={sxStyles.listPoint}>
                  事例 {item.id}
                </Typography>
                <Typography
                  variant="h3"
                  sx={[sxStyles.listTitle, commonSxStyles.typography.heading3]}
                >
                  {item.mainTitle}
                </Typography>
                <Box
                  component="img"
                  src={`/image/career/${item.image}.webp`}
                  alt=""
                  width={432}
                  height={387}
                  sx={sxStyles.listImage}
                />

                <Box
                  component="ul"
                  sx={[
                    sxStyles.listTrouble,
                    commonSxStyles.typography.normalText,
                  ]}
                >
                  {item.troubles.map((trouble, index) => (
                    <Box component="li" key={index}>
                      {trouble}
                    </Box>
                  ))}
                </Box>
                <Box sx={sxStyles.listSolutions}>
                  {item.solutions.map((solution, index) => (
                    <Box key={index} sx={sxStyles.listSolutionItem}>
                      <CheckBoxIcon />
                      <Typography
                        component="p"
                        sx={commonSxStyles.typography.largeText}
                      >
                        {solution.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Features;
