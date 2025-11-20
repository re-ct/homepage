import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from 'react';
import FadeInOnView from '../components/FadeInOnView';

interface accordionData {
  id: string;
  question: string;
  answer: string | ReactNode;
}

const accordionData = [
  {
    id: 'panel1',
    question: 'コンピューターの知識はどれくらい必要ですか？',
    answer: (
      <>
        パソコンの基本的な操作（電源の入れ方、マウスやキーボードの操作、インターネット接続など）ができれば問題ありません。
      </>
    ),
  },
  {
    id: 'panel2',
    question: 'Scratch以外のプログラミング言語を教える必要はありますか？',
    answer: (
      <>
        必要ありません。
        Re:ProSは、論理的思考力の習得に最適なScratchに特化しており、教材も全てScratchベースでご提供します。
        <br />
        将来的にさらに高度な言語を希望される生徒様には、本部から適切な学習方法をご案内いたします。
      </>
    ),
  },
  {
    id: 'panel3',
    question: '講師として指導するにあたり、教員免許や特別な資格は必要ですか？',
    answer: (
      <>
        特別な免許や資格は一切必要ありません。
        <br />
        教育業界未経験の方でも安心してスタートできるよう、指導マニュアルとサポート体制を整えています。
      </>
    ),
  },
  {
    id: 'panel4',
    question:
      '教室運営中、技術的なトラブルが発生した場合、本部に相談できますか？',
    answer: (
      <>
        はい、教材に関するトラブル・システム上の疑問などは、電話やチャットで本部スタッフが対応いたします。
      </>
    ),
  },
  {
    id: 'panel5',
    question: '副業でやる場合、時間はどのくらい確保すべきですか？',
    answer: (
      <>
        週末の数時間（例えば土曜の午後のみなど）から開講が可能です。
        <br />
        開講前のみ、教材・指導マニュアルを確認する時間が必要となります。
      </>
    ),
  },
  {
    id: 'panel6',
    question: '生徒の集客はどのように行うのですか？',
    answer: <>生徒の集客活動は、オーナー様ご自身で行っていただきます。</>,
  },
  {
    id: 'panel7',
    question: '開校に必要な設備（PCなど）は、自分で用意するのですか？',
    answer: (
      <>
        はい、開校場所（自宅やレンタルスペースなど）と、生徒の人数に応じた
        PCやタブレット、インターネット環境をご用意いただきます。
      </>
    ),
  },
  {
    id: 'panel8',
    question: '教室を閉鎖（廃業）する場合、違約金などは発生しますか？',
    answer: (
      <>いいえ、万が一運営が困難になった場合も、違約金なしで閉鎖が可能です。</>
    ),
  },
];

const sxStyles = {
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: 10,
    pb: 10,
  },
  sectionWrap: {
    maxWidth: '948px',
    px: '24px',
    mx: 'auto',
    pt: '120px',
    mt: '-120px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  accordion: {
    border: 'solid 2px #F0F0F0',
    borderRadius: '8px',
    boxShadow: 'none',
    marginTop: 2,
    '&:first-child': {
      borderRadius: '8px',
    },
    '&:last-child': {
      borderRadius: '8px',
    },
    '&:before': {
      content: 'none',
    },
  },
  accordionSummary: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '16px',
    '& > span': {
      my: '20px',
    },
  },
  accordionSummaryText: {
    backgroundColor: '#24285B',
    color: '#fff',
    borderRadius: '50%',
    width: '26px',
    height: '26px',
    minWidth: '26px',
    minHeight: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mr: 2,
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial,sans-serif',
  },
  accordionDetails: {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '1.7',
  },
  wrap: {
    mt: 6,
    width: '100%',
    maxWidth: '900px',
    mx: 'auto',
    '@media screen and (max-width:450px)': {
      width: '100%',
    },
  },
};

const Faq = () => {
  return (
    <Box sx={sxStyles.section}>
      <FadeInOnView>
        <Box sx={sxStyles.sectionWrap} id="faq">
          <Typography
            variant="h2"
            component="h2"
            sx={[
              {
                color: commonSxStyles.color.black,
                textAlign: 'center',
                '& > br': {
                  display: 'none',
                  '@media screen and (max-width:450px)': {
                    display: 'block',
                  },
                },
              },
              commonSxStyles.typography.heading2,
            ]}
          >
            よくある質問
          </Typography>
          <Box sx={sxStyles.wrap}>
            {accordionData.map((item) => (
              <Accordion key={item.id} sx={sxStyles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#24285B' }} />}
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                  sx={sxStyles.accordionSummary}
                >
                  <Typography sx={sxStyles.accordionSummaryText} component="span">
                    Q
                  </Typography>
                  {item.question}
                </AccordionSummary>
                <AccordionDetails sx={sxStyles.accordionDetails}>
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};

export default Faq;
