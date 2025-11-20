import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import image from '../../../../public/image/school/fc/flow_teaching.webp';
import arrow from '../../../../public/image/school/fc/flow_arrow.svg';
import React from 'react';

type Flow = {
  step: string;
  title: string;
  detail?: string;
};

const flow: Flow[] = [
  {
    step: '01',
    title: 'お問い合わせ',
  },
  {
    step: '02',
    title: '説明会',
    detail: '※オンライン可',
  },
  {
    step: '03',
    title: '面談',
    detail: '※オンライン可',
  },
  {
    step: '04',
    title: '加盟契約',
  },
  {
    step: '05',
    title: '開講準備',
  },
  {
    step: '06',
    title: '開講',
  },
  {
    step: '07',
    title: '開講後サポート',
  },
];

const sxStyles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
    width: '100%',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    px: 4,
    py: 2,
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '8px',
    width: '100%',
    flexWrap: 'wrap',
  },
  icon: {
    background: `url(${arrow.src})`,
    maxWidth: '27px',
    minWidth: '27px',
    maxHeight: '12px',
    minHeight: '12px',
    content: '""',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },

  flowWrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.primary[100],
    pt: 10,
    pb: 13,
  },

  contentArea: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
    pt: '120px',
    mt: '-120px',
    '@media screen and (max-width:450px)': {
      maxWidth: '100%',
    },
  },

  heading2: {
    color: commonSxStyles.color.black,
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },

  layoutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 380px',
    gap: 5,
    mt: 5,
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  image: {
    maxWidth: '100%',
    height: 'auto',
    '@media screen and (max-width:768px)': {
      maxWidth: '400px',
      width: '100%',
      position: 'static',
      top: 'auto',
      pt: 0,
      mt: 0,
    },
  },
  stepTitle: {
    fontWeight: 'bold',
  },
  stepDetail: {
    color: '#5D5D5D',
    fontSize: '10px',
    letterSpacing: '0.02em',
    lineHeight: '1.6',
    ml: 1,
  },
  step: {
    fontFamily: 'Arial,sans-serif',
    mr: 2,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#97B5F8',
  },
};

const Arrow = () => {
  return <Box component="span" sx={sxStyles.icon}></Box>;
};

const Flow = () => {
  return (
    <Box sx={sxStyles.flowWrap}>
      <Box sx={sxStyles.contentArea} id="flow">
        <Typography
          variant="h2"
          component="h2"
          sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
        >
          加盟から
          <br />
          運営までの流れ
        </Typography>
        <Box sx={sxStyles.layoutGrid}>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ol"
          >
            {flow.map((item, index) => (
              <React.Fragment key={item.step}>
                <Box component="li" sx={sxStyles.listItem}>
                  <Typography
                    sx={[
                      sxStyles.stepTitle,
                      commonSxStyles.typography.largeText,
                    ]}
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
                {index < flow.length - 1 && <Arrow />}
              </React.Fragment>
            ))}
          </Box>
          <Box
            component="img"
            src={image.src}
            alt="開講準備から開講後まで本部がサポートいたします"
            width={600}
            height={658}
            sx={sxStyles.image}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Flow;
