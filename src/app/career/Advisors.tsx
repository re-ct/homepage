import { Box, Typography } from '@mui/material';
import { commonSxStyles } from './components/Style';
import React from 'react';
import FadeInOnView from '../../components/FadeInOnView';
import { ReactNode } from 'react';

export type advisorProfile = {
  id: string | number;
  nameKanji: string;
  nameRoma: string;
  image: string;
  qualifications: {
    title: string;
    list: string[];
  };
  sections: {
    heading: string;
    content: ReactNode;
  }[];
};

const advisors: advisorProfile[] = [
  {
    id: 'advisor-01',
    nameKanji: '渡辺 優樹',
    nameRoma: 'Watanabe Yuki',
    image: 'watanabe',
    qualifications: {
      title: '保有資格',
      list: [
        '高等学校教諭一種免許状「情報」 免許保有',
        '基本情報技術者 資格保有',
      ],
    },
    sections: [
      {
        heading: '経歴',
        content: (
          <>
            <p>
              名古屋大学大学院
              情報学研究科修了後、プライム上場企業にて5年間Webエンジニアとして勤務。
              <br />
              5人のメンバーのマネジメントも経験しました。
              <br />
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
              現役エンジニアだからこそ、技術トレンドや開発現場のリアルな課題を理解した上で、的確なアドバイスができます。
            </p>
            <h5>Web技術全方位の経験あり</h5>
            <p>
              インフラ・バックエンド・フロントエンドまでWeb開発全体の経験があるため、キャリアチェンジや学習計画の相談が可能です。
            </p>
          </>
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
  listItemProfile: {
    marginTop: '20px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)',
    border: 'solid 1px' + commonSxStyles.color.white,
    borderRadius: '3px',
    padding: '16px 16px 20px',
  },
  qualifications: {
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: 'solid 1px #CFCFCF',
  },
  qualificationsTitle: {
    fontWeight: 'bold',
  },
  qualificationsList: {
    marginTop: '4px',
    paddingLeft: '2em',
    listStyle: 'disc',
    '& > li': {
      marginLeft: '-1em',
    },
  },
  contents: {
    '@media screen and (max-width:768px)': {
      marginTop: '32px',
    },
  },
  contentsWrap: {
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
  },
};

const Advisors = () => {
  return (
    <Box sx={sxStyles.wrap}>
      <FadeInOnView>
        <Box sx={sxStyles.contentArea} id="advisors">
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
          >
            アドバイザーの紹介
          </Typography>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ul"
          >
            {advisors.map((advisor) => (
              <Box component="li" key={advisor.id} sx={sxStyles.listItem}>
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
                  <Box sx={sxStyles.listItemProfile}>
                    <Typography
                      component="h3"
                      sx={commonSxStyles.typography.heading3}
                    >
                      {advisor.nameKanji}
                    </Typography>
                    <Typography
                      component="p"
                      sx={commonSxStyles.typography.smallText}
                    >
                      {advisor.nameRoma}
                    </Typography>
                    <Box sx={sxStyles.qualifications}>
                      <Typography
                        component="h4"
                        sx={[
                          commonSxStyles.typography.smallText,
                          sxStyles.qualificationsTitle,
                        ]}
                      >
                        {advisor.qualifications.title}
                      </Typography>
                      <Box
                        component="ul"
                        sx={[
                          sxStyles.qualificationsList,
                          commonSxStyles.typography.smallText,
                        ]}
                      >
                        {advisor.qualifications.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={sxStyles.contents}>
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
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Advisors;
