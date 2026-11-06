import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';

type Question = {
  id: string;
  question: string;
  answer: string[];
};

const questionData: Question[] = [
  {
    id: 'q1',
    question: 'AIについて詳しくなくても相談できますか？',
    answer: [
      'はい。具体的なツールや導入方法が決まっていない段階からご相談いただけます。',
    ],
  },
  {
    id: 'q2',
    question: '小規模な内容でも依頼できますか？',
    answer: [
      'はい。企業規模や業種を問わず、ご相談いただけます。',
      '小規模な業務改善から本格的なシステム開発まで、課題やご予算に合わせて柔軟に対応いたします。',
    ],
  },
  {
    id: 'q3',
    question: '相談や導入には費用がかかりますか？',
    answer: [
      'お問い合わせ・ご相談は無料です。ご契約後は、支援内容に応じて費用が発生します。',
      '稼働時間に応じたご請求や月額契約など、ご要望や支援内容に合わせて柔軟に対応いたします。',
    ],
  },
  {
    id: 'q4',
    question: '既存のシステムと連携できますか？',
    answer: [
      'はい。既存システムの仕様やAPIの提供状況などを確認し、対応方法をご提案することも可能です。',
    ],
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
        '@media screen and (max-width:450px)': {
          pb: 8,
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
        <Heading2 subText="faq" mainText="よくあるご質問" />
        <Box mt={5}>
          {questionData.map((item) => (
            <Box
              component="dl"
              key={item.id}
              sx={{
                borderBottom: `solid 1px ${commonSxStyles.color.border}`,
                pb: 3,
                '& + &': {
                  pt: 3,
                },
              }}
            >
              <Typography
                component="dt"
                sx={[
                  {
                    display: 'flex',
                  },
                  commonSxStyles.typography.heading3,
                ]}
              >
                <Typography
                  component="span"
                  sx={[
                    {
                      mr: 1,
                      color: commonSxStyles.color.primary,
                    },
                    commonSxStyles.typography.heading3,
                  ]}
                >
                  Q.
                </Typography>
                {item.question}
              </Typography>
              <Typography
                component="dd"
                sx={[
                  {
                    mt: 2,
                    display: 'flex',
                  },
                  commonSxStyles.typography.normalText,
                ]}
              >
                <Typography
                  component="span"
                  sx={[
                    {
                      mr: 2,
                      fontWeight: 'bold',
                      color: commonSxStyles.color.primary,
                    },
                    commonSxStyles.typography.normalText,
                  ]}
                >
                  A.
                </Typography>
                <Box component="span">
                  {item.answer.map((text, index) => (
                    <Box
                      component="span"
                      key={index}
                      sx={{
                        display: 'block',
                      }}
                    >
                      {text}
                    </Box>
                  ))}
                </Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Faq;
