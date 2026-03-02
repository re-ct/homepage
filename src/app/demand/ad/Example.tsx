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
    banner: '',
    detail:
      'バナー内に2つの選択肢を配置し、ユーザーがその場で選ぶことができます。',
  },
  {
    id: 2,
    banner: '',
    detail: '指やマウスをスライドさせることで、2つの画像を自由に比較できます。',
  },
  {
    id: 3,
    banner: '',
    detail:
      '指やマウスでこすることで、プレゼントや特典を表示させることができます。',
  },
];

const sxStyles = {
  text: {
    mt: '16px',
  },
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    mt: '36px',
    gap: '24px 16px',
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
    iframe: {
      maxWidth: '100%',
      aspectRatio: '500/250',
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
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="case" mainText="制作事例" />
        <Box sx={sxStyles.ul} component="ul">
          {list.map((item) => (
            <Box component="li" key={item.id}>
              <iframe
                src={`/sample/${item.banner}.html`}
                width="500"
                height="250"
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
