import { Box, Typography } from '@mui/material';
import Heading2 from '../components/Heading2';
import { commonSxStyles } from '../components/Style';

type list = {
  id: number;
  banner: string;
  detail: string;
};

const list: list[] = [
  {
    id: 1,
    banner: 'gwd_choice',
    detail:
      'バナー内に2つの選択肢を配置し、ユーザーがその場で選ぶことができます。',
  },
  {
    id: 2,
    banner: 'gwd_slider',
    detail: '指やマウスをスライドさせることで、2つの画像を自由に比較できます。',
  },
  {
    id: 3,
    banner: 'gwd_scratch',
    detail:
      '指やマウスでこすることで、プレゼントや特典を表示させることができます。',
  },
];

const sxStyles = {
  text: {
    mt: '8px',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    mt: '36px',
    gap: '36px 16px',
    listStyle: 'none',
    flexWrap: 'wrap',
    '>li': {
      maxWidth:'300px',
      minWidth: '300px',
    },
    iframe: {
      maxWidth: '100%',
      aspectRatio: '300/250',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0px 1px 5px rgba(0,0,0,0.25)',
      '>': {
        border: 'none !important',
      }
    },
  },
};

const Example = () => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="case" mainText="制作事例" />
        <Box sx={sxStyles.ul} component="ul">
          {list.map((item) => (
            <Box component="li" key={item.id}>
              <iframe
                src={`/image/demand/ad/${item.banner}/index.html`}
                width="600"
                height="500"
                style={{ border: 'none' }}
                title={`サンプル${item.id}`}
              />
              <Typography
                sx={[sxStyles.text, commonSxStyles.typography.smallText]}
              >
                {item.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Example;
