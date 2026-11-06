import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/system';
import { commonSxStyles } from '../components/Style';

type ReasonItem = {
  id: string;
  number: string;
  title: string;
  detail: string;
  imageLabel: string;
  imageName: string;
};

const reasonData: ReasonItem[] = [
  {
    id: '1',
    number: 'POINT 01',
    title: '実務でAIを活用するエンジニアが対応',
    detail:
      '実際の開発・制作現場で培った知見をもとに、情報の取り扱いやセキュリティ面にも配慮した、実現可能なAI活用方法をご提案します。',
    imageLabel: 'エンジニアが対応するイラスト',
    imageName: 'reason_image_01.webp',
  },
  {
    id: '2',
    number: 'POINT 02',
    title: '戦略から実装までワンストップ',
    detail:
      '課題整理・ツール選定だけでなく、業務自動化やシステム開発まで対応します。',
    imageLabel: 'ワンストップ対応のイラスト',
    imageName: 'reason_image_02.webp',
  },
  {
    id: '3',
    number: 'POINT 03',
    title: '成果が出るまで伴走可能',
    detail:
      '導入して終わりではなく、利用状況や効果を確認しながら改善を支援することも可能です。',
    imageLabel: '伴走支援のイラスト',
    imageName: 'reason_image_03.webp',
  },
];

const sxStyles = {
  list: {
    mt: 5,
    listStyle: 'none',
  },
  listItem: {
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '20px',
    boxShadow: '0px 1px 6px rgba(34, 106, 170, 0.08)',
    px: 5,
    py: 4,
    display: 'grid',
    gridTemplateColumns: '1fr 240px',
    gridTemplateAreas: '"text image"',
    alignItems: 'center',
    gap: 5,
    '& + &': {
      mt: 3,
    },
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '"image" "text"',
      gap: 2,
      px: 3,
      pt: 4,
      pb: 5,
    },
  },
  textArea: {
    gridArea: 'text',
  },
  number: {
    fontWeight: 'bold',
    color: alpha(commonSxStyles.color.primary, 0.4),
  },
  placeholder: {
    gridArea: 'image',
    mx: 'auto',
    width: '100%',
    maxWidth: '240px',
    aspectRatio: '462 / 374',
    backgroundColor: '#eee',
    border: '2px dashed #bbb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#888',
    fontSize: '12px',
    p: 1,
    '@media screen and (max-width:768px)': {
      maxWidth: '200px',
    },
  },
  title: {
    mt: 0.5,
  },
  text: {
    mt: 1.5,
  },
};

const Reason = () => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
        '@media screen and (max-width:450px)': {
          pb: 9,
        },
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
        <Heading2 subText="reason" mainText="私たちが選ばれる3つの理由" />
        <Box component="ul" sx={sxStyles.list}>
          {reasonData.map((item) => (
            <Box component="li" key={item.id} sx={sxStyles.listItem}>
              <Box sx={sxStyles.textArea}>
                <Typography
                  component="span"
                  sx={[sxStyles.number, commonSxStyles.typography.normalText]}
                >
                  {item.number}
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={[sxStyles.title, commonSxStyles.typography.heading3]}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={[sxStyles.text, commonSxStyles.typography.normalText]}
                >
                  {item.detail}
                </Typography>
              </Box>
              {/* TODO(画像): 選ばれる理由のイラスト / 462×374 / public/image/demand/ai/reason_image_0X.webp */}
              <Box sx={sxStyles.placeholder}>
                画像：{item.imageLabel}
                <br />
                462×374
                <br />
                {item.imageName}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Reason;
