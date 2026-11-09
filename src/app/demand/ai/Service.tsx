import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { commonSxStyles } from '../components/Style';

type ServiceItem = {
  id: string;
  title: string;
  tags: string[];
  detail: React.ReactNode;
  imageName: string;
};

const serviceData: ServiceItem[] = [
  {
    id: '1',
    title: 'AI導入コンサルティング',
    tags: ['課題整理', '導入計画', 'ツール選定'],
    detail: (
      <>
        企業の業務課題をヒアリングし、AIを活用できる業務の洗い出しから、
        <br />
        適切なツールの選定・導入計画まで支援します。
      </>
    ),
    imageName: 'service_image_01.webp',
  },
  {
    id: '2',
    title: 'AI業務効率化・自動化支援',
    tags: ['既存業務の改善', 'ワークフロー構築'],
    detail: (
      <>
        AIツールや外部サービスを組み合わせ、 日常業務の効率化・自動化を
        <br />
        実現します。
      </>
    ),
    imageName: 'service_image_02.webp',
  },
  {
    id: '3',
    title: 'AIを組み込んだシステム開発',
    tags: ['新規開発', '既存システムへの機能追加'],
    detail: (
      <>
        企業ごとの課題に合わせて、 AIを組み込んだWebシステムを設計・開発します。
      </>
    ),
    imageName: 'service_image_03.webp',
  },
  {
    id: '4',
    title: 'AI運用・定着支援',
    tags: ['効果検証', '継続的な改善'],
    detail: (
      <>
        AI導入後の利用状況や効果を確認し、 業務への定着と継続的な改善を
        <br />
        支援します。
      </>
    ),
    imageName: 'service_image_04.webp',
  },
];

const sxStyles = {
  section: {
    display: 'flex',
    alignItems: 'center',
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
  lead: {
    mt: 2,
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
  list: {
    mt: 5,
    listStyle: 'none',
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '20px',
    boxShadow: '0px 1px 6px rgba(34, 106, 170, 0.08)',
    px: 4,
    py: 1,
    '@media screen and (max-width:768px)': {
      px: 3,
    },
  },
  listItem: {
    py: 3,
    '& + &': {
      borderTop: `solid 1px ${commonSxStyles.color.border}`,
    },
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gridTemplateAreas: '"text image"',
    alignItems: 'center',
    gap: 4,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '"text" "image"',
      gap: 2,
    },
  },
  textArea: {
    gridArea: 'text',
  },
  image: {
    gridArea: 'image',
    mx: 'auto',
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '4px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  title: {
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    '@media screen and (max-width:768px)': {
      fontSize: '20px',
    },
    '&::before': {
      content: '""',
      flexShrink: 0,
      width: '8px',
      height: '8px',
      borderRadius: '2px',
      backgroundColor: commonSxStyles.color.primary,
    },
  },
  tagList: {
    mt: 1.5,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    listStyle: 'none',
  },
  tag: {
    border: `solid 1px ${commonSxStyles.color.border}`,
    px: 1,
    borderRadius: '2px',
  },
  text: {
    mt: 2,
    '& > br': {
      '@media screen and (max-width:450px)': {
        display: 'none',
      },
    },
  },
};

const Service = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.inner}>
        <Heading2 subText="service" mainText="ご提供サービス" />
        <Typography sx={[sxStyles.lead, commonSxStyles.typography.normalText]}>
          企業の課題に合わせて、
          <br />
          必要な支援を組み合わせて提供します。
        </Typography>
        <Box component="ul" sx={sxStyles.list}>
          {serviceData.map((item) => (
            <Box component="li" key={item.id} sx={sxStyles.listItem}>
              <Box sx={sxStyles.textArea}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={[commonSxStyles.typography.heading3, sxStyles.title]}
                >
                  {item.title}
                </Typography>
                <Box component="ul" sx={sxStyles.tagList}>
                  {item.tags.map((tag) => (
                    <Typography
                      component="li"
                      key={tag}
                      sx={[sxStyles.tag, commonSxStyles.typography.smallText]}
                    >
                      {tag}
                    </Typography>
                  ))}
                </Box>
                <Typography
                  sx={[sxStyles.text, commonSxStyles.typography.normalText]}
                >
                  {item.detail}
                </Typography>
              </Box>
              <Box
                component="img"
                src={`/image/demand/ai/${item.imageName}`}
                alt=""
                width={480}
                height={300}
                sx={sxStyles.image}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Service;
