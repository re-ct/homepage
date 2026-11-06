import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import arrow from '../../../../public/image/demand/flow_arrow.svg';
import React from 'react';
import { commonSxStyles } from '../components/Style';
import { alpha } from '@mui/system';

type FlowItem = {
  id: string;
  step: string;
  title: React.ReactNode;
  detail: React.ReactNode;
};

const flowData: FlowItem[] = [
  {
    id: '1',
    step: 'STEP 01',
    title: 'お問い合わせ',
    detail: (
      <>
        Webフォームにて
        <br />
        相談事項を
        <br />
        お送りください。
      </>
    ),
  },
  {
    id: '2',
    step: 'STEP 02',
    title: 'ヒアリング',
    detail: (
      <>
        現在の業務内容や課題、
        <br />
        AI活用の目的を無料で
        <br />
        ヒアリングします。
      </>
    ),
  },
  {
    id: '3',
    step: 'STEP 03',
    title: '課題分析・ご提案',
    detail: (
      <>
        導入方法・対応範囲・
        <br />
        概算費用を
        <br />
        ご提案します。
      </>
    ),
  },
  {
    id: '4',
    step: 'STEP 04',
    title: '導入・開発',
    detail: (
      <>
        定期的に進捗報告を
        <br />
        行い、お客様と密に
        <br />
        連携しながら進めます。
      </>
    ),
  },
  {
    id: '5',
    step: 'STEP 05',
    title: '運用・改善',
    detail: (
      <>
        導入後の効果を確認し、
        <br />
        必要に応じて継続的な
        <br />
        改善を行います。
      </>
    ),
  },
];

const sxStyles = {
  list: {
    mt: 5,
    display: 'flex',
    gap: '8px',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  listItem: {
    alignSelf: 'stretch',
    px: '12px',
    pt: 4,
    pb: 5,
    backgroundColor: commonSxStyles.color.background,
    borderRadius: '8px',
    border: `solid 1px ${commonSxStyles.color.background}`,
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.19)',
    minWidth: '200px',
    maxWidth: '200px',
    '&:first-child': {
      ml: 2.5,
    },
    '&:last-child': {
      mr: 2.5,
    },
  },
  icon: {
    background: `url(${arrow.src})`,
    maxWidth: '9px',
    minWidth: '9px',
    maxHeight: '14px',
    minHeight: '14px',
    content: '""',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  scroll: {
    overflow: 'auto hidden',
    scrollSnapType: 'x mandatory',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: commonSxStyles.color.primary,
    // 「・」の左右を詰めて1行に収める
    fontFeatureSettings: '"palt"',
    letterSpacing: 0,
    whiteSpace: 'nowrap',
  },
};

const Arrow = () => {
  return <Box component="span" sx={sxStyles.icon}></Box>;
};

const Flow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        '@media screen and (max-width:450px)': {
          pb: 9,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '1180px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Heading2 subText="flow" mainText="ご利用の流れ" />
        <Box sx={sxStyles.scroll}>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ol"
          >
            {flowData.map((item, index) => (
              <React.Fragment key={item.id}>
                <Box component="li" sx={sxStyles.listItem}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={[commonSxStyles.typography.heading3, sxStyles.title]}
                  >
                    <Typography
                      component="span"
                      sx={[
                        {
                          fontWeight: 'bold',
                          color: alpha(commonSxStyles.color.primary, 0.4),
                        },
                        commonSxStyles.typography.normalText,
                      ]}
                    >
                      {item.step}
                    </Typography>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={[
                      {
                        mt: 2,
                        textAlign: 'center',
                      },
                      commonSxStyles.typography.normalText,
                    ]}
                  >
                    {item.detail}
                  </Typography>
                </Box>
                {index < flowData.length - 1 && <Arrow />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Flow;
