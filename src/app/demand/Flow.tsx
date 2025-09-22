import Heading2 from './components/Heading2';
import { Box, Typography } from '@mui/material';
import arrow from '../../../public/image/demand/flow_arrow.svg';
import React from 'react';
import { commonSxStyles } from './components/Style';
import { alpha } from '@mui/system';


type Flow = {
  id: string;
  step: string;
  title: string;
  detail: string;
};

const flow: Flow[]  = [
  {
    id: '1',
    step: 'STEP 1',
    title: 'お問い合わせ',
    detail: 'Webフォームにて相談事項をお送りください。',
  },
  {
    id: '2',
    step: 'STEP 2',
    title: 'ヒアリング',
    detail: 'ヒアリング内容から、最適な開発プランをご提案します。',
  },
  {
    id: '3',
    step: 'STEP 3',
    title: 'ご契約',
    detail: 'ご提案内容にご納得いただけたらご契約となります。',
  },
  {
    id: '4',
    step: 'STEP 4',
    title: '開発',
    detail: '定期的に進捗報告を行い、お客様と密に連携しながら進めます。',
  },
  {
    id: '5',
    step: 'STEP 5',
    title: '納品・公開',
    detail: '開発完了後、最終確認を経て納品となります。',
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
    px: '12px',
    pt: 4,
    pb: 5,
    backgroundColor: commonSxStyles.color.background,
    borderRadius: '8px',
    border: `solid 1px ${commonSxStyles.color.background}`,
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.19)',
    minWidth: '180px',
    maxWidth: '180px',
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
  listItemWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  scroll: {
    overflow: 'auto hidden',
    scrollSnapType: 'x mandatory',
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
      }}
    >
      <Box
        sx={{
          maxWidth: '1040px',
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
            {flow.map((item, index) => (
              <React.Fragment key={item.id}>
                <Box component="li" sx={sxStyles.listItem}>
                  <Box sx={sxStyles.listItemWrap}>
                    <Typography
                      sx={[
                        {
                          display: 'flex',
                          flexDirection: 'column',
                          alignContent: 'center',
                          justifyContent: 'flex-start',
                          textAlign: 'center',
                          color: commonSxStyles.color.primary,
                        },
                        commonSxStyles.typography.heading3,
                      ]}
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
                </Box>
                {index < flow.length - 1 && <Arrow />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Flow;
