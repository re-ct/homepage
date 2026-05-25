'use client';
import { Box, Typography, Button } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import FadeInOnView from '../../../components/FadeInOnView';
import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { careerBusinessContact } from '../../../lib/const/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

export type merit = {
  id: string | number;
  heading: string;
  content: ReactNode;
};

const merit: merit[] = [
  {
    id: 'setup',
    heading: '初期費用',
    content: (
      <>
        <span>
          <strong>0</strong>
          <span>円</span>
        </span>
      </>
    ),
  },
  {
    id: 'monthly',
    heading: '月額料',
    content: (
      <>
        <span>
          <strong>0</strong>
          <span>円</span>
        </span>
      </>
    ),
  },
  {
    id: 'not-hired',
    heading: '不採用時',
    content: (
      <>
        <span>
          <strong>0</strong>
          <span>円</span>
        </span>
      </>
    ),
  },
  {
    id: 'early-resignation',
    heading: '早期退職時',
    content: <strong>返金保証</strong>,
  },
];

const sxStyles = {
  wrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.background,
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
  summary: {
    textAlign: 'center',
    marginTop: '36px',
    '@media screen and (max-width:768px)': {
      fontSize: '25px',
    },
    '& >span': {
      fontSize: '30px',
      '@media screen and (max-width:768px)': {
        fontSize: '25px',
        '>span': {
          fontSize: '21px',
        },
      },
    },
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: '10px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
    maxWidth: '670px',
    width: '100%',
    marginTop: '24px',
    marginInline: 'auto',
    '@media screen and (max-width:450px)': {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
  },
  listItem: {
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '4px',
    aspectRatio: '160/150',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > svg': {
      fill: commonSxStyles.color.accent,
    },
    '& > p': {
      '&:nth-child(2)': {
        marginTop: '10px',
      },
      '&:nth-child(3)': {
        lineHeight: '1',
        '>span': {
          fontWeight: 'bold',
          '>strong': {
            fontSize: '34px',
          },
          '>span': {
            fontSize: '19px',
          },
        },
        '>strong': {
          fontSize: '24px',
          display: 'inline-block',
          marginTop: '4px',
        },
      },
    },
  },
  cta: {
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    alignItems: 'center',
    marginTop: '52px',
  },
  ctaText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: commonSxStyles.color.accent,
    color: commonSxStyles.color.white,
    textTransform: 'none',
    padding: '16px 20px 16px 25px',
    borderRadius: '50px',
    boxShadow: 'none',
    width: '300px',
    maxWidth: '100%',
    transition: 'filter 0.3s',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '0.06em',
    gap: '8px',
    '&:hover': {
      boxShadow: 'none',
      filter: 'brightness(0.8)',
    },
  },
};

const Plan = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.wrap} id="plan">
      <FadeInOnView>
        <Box sx={sxStyles.contentArea}>
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
          >
            料金体系
          </Typography>
          <Typography
            sx={[sxStyles.summary, commonSxStyles.typography.heading2]}
          >
            <span>
              入社決定時<span>のみの</span>
            </span>
            {isSmallScreen && <br />}完全成功報酬型
          </Typography>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ul"
          >
            {merit.map((merit) => (
              <Box component="li" key={merit.id} sx={sxStyles.listItem}>
                <CloseIcon />
                <Typography sx={commonSxStyles.typography.largeText}>
                  {merit.heading}
                </Typography>
                <Typography>{merit.content}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={sxStyles.cta}>
            <Typography
              sx={[sxStyles.ctaText, commonSxStyles.typography.largeText]}
            >
              詳細はお問い合わせください
            </Typography>
            <Button
              variant="contained"
              href={careerBusinessContact}
              rel="noopener noreferrer"
              target="_blank"
              sx={sxStyles.button}
              endIcon={<KeyboardArrowRight />}
            >
              お問い合わせはこちら
            </Button>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Plan;
