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

const sxStyles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    pt: 7,
    pb: 12,
    backgroundColor: commonSxStyles.color.background,
    '@media screen and (max-width:450px)': {
      pb: 8,
    },
  },
  inner: {
    maxWidth: '940px',
    width: '100%',
    mx: 'auto',
    px: 2.5,
  },
  list: {
    mt: 5,
  },
  item: {
    borderBottom: `solid 1px ${commonSxStyles.color.border}`,
    pb: 3,
    '& + &': {
      pt: 3,
    },
  },
  question: {
    display: 'flex',
  },
  questionMark: {
    mr: 1,
    color: commonSxStyles.color.primary,
  },
  answer: {
    mt: 2,
    display: 'flex',
  },
  answerMark: {
    mr: 2,
    fontWeight: 'bold',
    color: commonSxStyles.color.primary,
  },
  answerText: {
    display: 'block',
  },
};

const Faq = () => {
  return (
    <Box sx={sxStyles.section}>
      <Box sx={sxStyles.inner}>
        <Heading2 subText="faq" mainText="よくあるご質問" />
        <Box sx={sxStyles.list}>
          {questionData.map((item) => (
            <Box component="dl" key={item.id} sx={sxStyles.item}>
              <Typography
                component="dt"
                sx={[sxStyles.question, commonSxStyles.typography.heading3]}
              >
                <Typography
                  component="span"
                  sx={[
                    sxStyles.questionMark,
                    commonSxStyles.typography.heading3,
                  ]}
                >
                  Q.
                </Typography>
                {item.question}
              </Typography>
              <Typography
                component="dd"
                sx={[sxStyles.answer, commonSxStyles.typography.normalText]}
              >
                <Typography
                  component="span"
                  sx={[
                    sxStyles.answerMark,
                    commonSxStyles.typography.normalText,
                  ]}
                >
                  A.
                </Typography>
                <Box component="span">
                  {item.answer.map((text, index) => (
                    <Box component="span" key={index} sx={sxStyles.answerText}>
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
