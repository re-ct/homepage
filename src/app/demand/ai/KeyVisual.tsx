import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomButton from '../components/Button';
import { commonSxStyles } from '../components/Style';
import { aiContact } from '@/lib/const/Link';

const pointData = [
  { id: '1', text: 'エンジニアが直接支援' },
  { id: '2', text: '課題・ご予算に合わせて柔軟対応' },
  { id: '3', text: '導入から運用まで幅広くサポート' },
];

const sxStyles = {
  placeholder: {
    width: '100%',
    maxWidth: '414px',
    aspectRatio: '828 / 640',
    backgroundColor: '#eee',
    border: '2px dashed #bbb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#888',
    fontSize: '14px',
    p: 2,
  },
  lead: {
    mt: 2,
    '& > br': {
      '@media screen and (max-width:460px)': {
        display: 'none',
      },
    },
  },
  list: {
    mt: 2,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    '@media screen and (max-width:460px)': {
      display: 'inline-flex',
      textAlign: 'left',
    },
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 'bold',
    '& > svg': {
      color: commonSxStyles.color.primary,
      fontSize: '20px',
    },
  },
};

const ImagePlaceholder = () => {
  return (
    <>
      画像：キービジュアル
      <br />
      828×640
      <br />
      key_visual_image.webp
    </>
  );
};

const KeyVisual = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: commonSxStyles.color.background,
        '@media screen and (max-width:460px)': {
          py: 5,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          rowGap: 3,
          columnGap: 4,
          '@media screen and (max-width:460px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          sx={{
            '@media screen and (max-width:460px)': {
              textAlign: 'center',
              width: '100%',
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: '50px',
              letterSpacing: '0.04em',
              lineHeight: '1.4',
              fontWeight: 'bold',
              '@media screen and (max-width:460px)': {
                fontSize: '34px',
              },
              '@media screen and (max-width:360px)': {
                fontSize: '29px',
              },
            }}
          >
            あなたの会社の
            <br />
            AI活用をサポート
          </Typography>
          <Typography sx={[sxStyles.lead, commonSxStyles.typography.largeText]}>
            AIを使いたいけれど、何から始めればいいか分からない...
            <br />
            そんな企業のお悩みを、AIを実務で活用するエンジニアが解決。
            <br />
            課題整理から導入・開発・運用改善まで、必要な支援を提供します。
          </Typography>
          {/* TODO(画像): キービジュアル（SP） / 828×640 / public/image/demand/ai/key_visual_image.webp */}
          <Box
            sx={[
              sxStyles.placeholder,
              {
                display: 'none',
                '@media screen and (max-width:460px)': {
                  display: 'flex',
                  mt: 2,
                  mx: 'auto',
                },
              },
            ]}
          >
            <ImagePlaceholder />
          </Box>
          <Box component="ul" sx={sxStyles.list}>
            {pointData.map((item) => (
              <Typography
                component="li"
                key={item.id}
                sx={[sxStyles.listItem, commonSxStyles.typography.largeText]}
              >
                <CheckCircleIcon />
                {item.text}
              </Typography>
            ))}
          </Box>
          <Box
            mt={4}
            sx={{
              width: '100%',
              '& > a': {
                '@media screen and (max-width:460px)': {
                  width: '100%',
                },
              },
            }}
          >
            <CustomButton
              label="AI導入について相談する"
              icon="arrow-right"
              href={aiContact}
              isExternal={true}
              gaLabel="demandAi_contact_form_keyVisual"
            />
          </Box>
        </Box>
        {/* TODO(画像): キービジュアル（PC） / 828×640 / public/image/demand/ai/key_visual_image.webp */}
        <Box
          sx={[
            sxStyles.placeholder,
            {
              flex: '1 1 300px',
              '@media screen and (max-width:460px)': {
                display: 'none',
              },
            },
          ]}
        >
          <ImagePlaceholder />
        </Box>
      </Box>
    </Box>
  );
};
export default KeyVisual;
