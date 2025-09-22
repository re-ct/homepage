import Heading2 from './components/Heading2';
import { Box, Typography } from '@mui/material';
import skill from '../../../public/image/demand/service_skill.webp';
import React from 'react';
import { commonSxStyles } from './components/Style';

type SkillData = {
  id: string;
  category: string;
  item: string[];
};

const skillData: SkillData[] = [
  {
    id: '1',
    category: '開発言語',
    item: ['Ruby', 'PHP', 'Python'],
  },
  {
    id: '2',
    category: 'フロントエンドフレームワーク',
    item: ['React.js'],
  },
  {
    id: '3',
    category: 'バックエンドフレームワーク',
    item: ['Ruby on Rails', 'Symfony'],
  },
  {
    id: '4',
    category: 'インフラ',
    item: ['AWS', 'Google Cloud', 'Terraform', 'Pulumi'],
  },
  {
    id: '5',
    category: 'CMS',
    item: ['Studio', 'WordPress', 'Micro CMS'],
  },
];

const sxStyles = {
  list: {
    mt: 5,
    display: 'flex',
    gap: '24px',
    listStyle: 'none',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width:450px)': {
      mt: 4,
    },
  },
  listItem: {
    minWidth: '280px',
    maxWidth: '280px',
    background: commonSxStyles.color.white,
    borderRadius: '8px',
    px: 2.5,
    py: 2.5,
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.2)',
    textAlign: 'center',
    '@media screen and (max-width:450px)': {
      minWidth: '100%',
      maxWidth: '100%',
    },
  },
  title: {
    fontWeight: 'bold',
    '& > br': {
      '@media screen and (max-width:450px)': {
        display: 'none',
      },
    },
  },
  text: {
    color: commonSxStyles.color.grayText,
    mt: 1,
  },
  skillWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    mt: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    '@media screen and (max-width:450px)': {
      flexDirection: 'column',
    },
  },
  skillTitle: {
    color: commonSxStyles.color.primary,
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
  },
};

const Service = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 9,
        backgroundColor: commonSxStyles.color.background,
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          width: '100%',
          mx: 'auto',
          '@media screen and (max-width:450px)': {
            px: 2.5,
          },
        }}
      >
        <Heading2 subText="service" mainText="サービス内容" />
        <Box component="ul" sx={sxStyles.list}>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.largeText]}
            >
              Webサービスの
              <br />
              機能開発
            </Typography>
            <Typography
              sx={[sxStyles.text, commonSxStyles.typography.smallText]}
            >
              お客様の課題を解決できる
              <br />
              Webサービスを開発します。
            </Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.largeText]}
            >
              既存サイトの
              <br />
              機能追加・改修
            </Typography>
            <Typography
              sx={[sxStyles.text, commonSxStyles.typography.smallText]}
            >
              機能改善・パフォーマンス向上など、
              <br />
              部分的な改修にも対応いたします。
            </Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.largeText]}
            >
              CMSの
              <br />
              構築・カスタマイズ
            </Typography>
            <Typography
              sx={[sxStyles.text, commonSxStyles.typography.smallText]}
            >
              お客様自身で簡単に更新・運用できる
              <br />
              Webサイトを構築します。
            </Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.largeText]}
            >
              Webサイト・
              <br />
              ホームページ制作
            </Typography>
            <Typography
              sx={[sxStyles.text, commonSxStyles.typography.smallText]}
            >
              ランディングページ・コーポレートサイト
              <br />
              などの制作をいたします。
            </Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography
              component="h3"
              sx={[sxStyles.title, commonSxStyles.typography.largeText]}
            >
              AIを活用した
              <br />
              業務課題の解決
            </Typography>
            <Typography
              sx={[sxStyles.text, commonSxStyles.typography.smallText]}
            >
              業務効率化など、生成AIを活用した
              <br />
              課題解決方法をご提案いたします。
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.skillWrap}>
          <img
            src={skill.src}
            alt=""
            width="484"
            height="280"
            style={{ maxWidth: '242px', height: 'auto' }}
          />
          <Box
            sx={{
              '@media screen and (max-width:450px)': {
                width: '100%',
              },
            }}
          >
            <Typography
              sx={[sxStyles.skillTitle, commonSxStyles.typography.heading3]}
            >
              対応技術 一例
            </Typography>
            <Box component="dl" mt={2}>
              {skillData.map((data) => (
                <Box
                  key={data.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    '& + &': {
                      mt: 1,
                    },
                    '@media screen and (max-width:450px)': {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    },
                  }}
                >
                  <Typography
                    component="dt"
                    sx={[
                      {
                        fontWeight: 'bold',
                        minWidth: '240px',
                        maxWidth: '240px',
                      },
                      commonSxStyles.typography.normalText,
                    ]}
                  >
                    {data.category}
                  </Typography>
                  <Typography
                    component="dd"
                    sx={commonSxStyles.typography.normalText}
                  >
                    {data.item.map((skill, index) => (
                      <React.Fragment key={index}>
                        {skill}
                        {index < data.item.length - 1 && ' / '}
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Typography
          sx={[
            {
              mt: 8,
              textAlign: 'center',
              '& > br': {
                display: 'none',
                '@media screen and (max-width:450px)': {
                  display: 'block',
                },
              },
            },
            commonSxStyles.typography.normalText,
          ]}
        >
          記載のないご依頼につきましても、
          <br />
          柔軟に対応いたします。
        </Typography>
        <Typography
          sx={[
            {
              textAlign: 'center',
              mt: 0.5,
              '& > br': {
                display: 'none',
                '@media screen and (max-width:450px)': {
                  display: 'block',
                },
              },
            },
            commonSxStyles.typography.normalText,
          ]}
        >
          ご要望やご相談がございましたら、
          <br />
          ぜひ一度お問い合わせください。
        </Typography>
      </Box>
    </Box>
  );
};
export default Service;
