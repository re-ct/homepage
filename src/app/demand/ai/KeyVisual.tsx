import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { alpha } from '@mui/system';
import CustomButton from '../components/Button';
import { commonSxStyles } from '../components/Style';
import { contact } from '@/lib/const/Link';

const pointData = [
  {
    id: '1',
    text: (
      <>
        エンジニアが
        <br />
        直接支援
      </>
    ),
  },
  {
    id: '2',
    text: (
      <>
        ご予算に合わせて
        <br />
        柔軟対応
      </>
    ),
  },
];

const sxStyles = {
  section: {
    overflow: 'hidden',
    backgroundColor: commonSxStyles.color.background,
  },
  inner: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 'calc(50% - min(50vw, 600px))',
      bottom: 0,
      left: '45%',
      backgroundImage: `linear-gradient(to right, ${commonSxStyles.color.background} 0%, ${alpha(commonSxStyles.color.background, 0)} 30%), url(/image/demand/ai/key_visual_background.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
    },
    maxWidth: '1000px',
    width: '100%',
    mx: 'auto',
    pt: 7,
    pb: 6,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 3,
    columnGap: 4,
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      pt: 0,
      pb: 5,
      px: 2.5,
      '&::before': {
        position: 'static',
        display: 'block',
        width: 'calc(100% + 40px)',
        mx: '-20px',
        aspectRatio: '16 / 9',
        backgroundImage: `linear-gradient(to bottom, ${alpha(commonSxStyles.color.background, 0)} 60%, ${commonSxStyles.color.background} 100%), url(/image/demand/ai/key_visual_background.webp)`,
      },
    },
  },
  textArea: {
    position: 'relative',
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
      width: '100%',
    },
  },
  heading: {
    fontSize: '52px',
    letterSpacing: '0.04em',
    lineHeight: '1.4',
    fontWeight: 'bold',
    '@media screen and (max-width:460px)': {
      fontSize: '34px',
    },
    '@media screen and (max-width:360px)': {
      fontSize: '29px',
    },
  },
  lead: {
    mt: 1.5,
    '& > .sp': {
      display: 'none',
      '@media screen and (max-width:768px)': {
        display: 'block',
      },
    },
  },
  list: {
    mt: 2,
    listStyle: 'none',
    display: 'flex',
    gap: 1,
    '@media screen and (max-width:768px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    py: 0.5,
    px: 1,
    borderRadius: 1,
    border: 'solid 1px' + commonSxStyles.color.primary,
    color: commonSxStyles.color.primary,
    backgroundColor: alpha(commonSxStyles.color.white, 0.5),
    '& > svg': {
      color: commonSxStyles.color.primary,
      fontSize: '15px',
    },
    '& br': {
      display: 'none',
    },
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      lineHeight: 1.4,
      px: 1.5,
      '& br': {
        display: 'block',
      },
    },
  },
  button: {
    mt: 4,
    width: '100%',
    '& > a': {
      '@media screen and (max-width:460px)': {
        width: '100%',
      },
    },
  },
};

const KeyVisual = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.inner}>
        <Box sx={sxStyles.textArea}>
          <Typography component="h2" sx={sxStyles.heading}>
            あなたの会社の
            <br />
            AI活用をサポート
          </Typography>
          <Typography
            sx={[sxStyles.lead, commonSxStyles.typography.normalText]}
          >
            AIを使いたいけれど、
            <br className="sp" />
            何から始めればいいか分からない...
            <br />
            そんなお悩みを、AIを実務で活用する
            <br className="sp" />
            エンジニアが解決します
          </Typography>
          <Box component="ul" sx={sxStyles.list}>
            {pointData.map((item) => (
              <Typography
                component="li"
                key={item.id}
                sx={[sxStyles.listItem, commonSxStyles.typography.normalText]}
              >
                <CheckCircleIcon />
                <span>{item.text}</span>
              </Typography>
            ))}
          </Box>
          <Box sx={sxStyles.button}>
            <CustomButton
              label="AI活用について相談する"
              icon="arrow-right"
              showFreeLabel={false}
              href={contact}
              isExternal={true}
              gaLabel="demandAi_contact_form_keyVisual"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default KeyVisual;
