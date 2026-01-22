import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingTeacherImg from '../../../public/image/school/heading_faq.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sxStyles = {
  accordion: {
    border: 'solid 2px #F0F0F0',
    boxShadow: 'none',
    marginTop: 2,
    '&:before': {
      content: 'none',
    },
  },
  accordionSummary: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '16px',
    '& > span': {
      marginBlock: '16px',
    },
  },
  accordionSummaryText: {
    backgroundColor: '#24285B',
    color: '#fff',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    minWidth: '24px',
    minHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mr: 2,
  },
  accordionDetails: {
    textAlign: 'left',
  },
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '245px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '177px',
      },
    },
  },
  wrap: {
    mt: 6,
    width: '100%',
    maxWidth: '800px',
    mx: 'auto',
    '@media screen and (max-width:450px)': {
      width: '100%',
    },
  },
};

const accordionData = [
  {
    id: 'panel1',
    question: '祝日はどうなりますか？',
    answer:
      '祝日の場合も授業を行います。都合が合わない場合は原則1ヶ月までの間で振替授業を行うことが可能です。',
  },
  {
    id: 'panel2',
    question: 'パソコン初心者でも大丈夫ですか？',
    answer:
      'もちろん大丈夫です。講師が丁寧にフォローいたしますので、ご安心ください。学習に不安がないか確かめる上でも、ぜひ一度無料体験にご参加ください。',
  },
  {
    id: 'panel3',
    question: 'パソコンやタブレットを購入する必要はありますか？',
    answer: '教室にあるものを利用しますので、機材の購入は不要です。',
  },
  {
    id: 'panel4',
    question: 'どんな学校の生徒が通っていますか？',
    answer:
      '御津中学校/音羽中学校/御津南部小学校/御津北部小学校/平尾小学校/御油小学校/国府小学校/前芝小学校/大塚小学校の生徒が通っています。',
  },
];

const Faq = () => {
  return (
    <Box pt={6} pb={10} mx={3}>
      <Typography variant="h2" sx={sxStyles.heading}>
        <img
          src={headingTeacherImg.src}
          alt="よくある質問"
          width="381"
          height="61"
        />
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
              <Typography sx={sxStyles.accordionSummaryText}>Q</Typography>
              {item.question}
            </AccordionSummary>
            <AccordionDetails sx={sxStyles.accordionDetails}>
              {item.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
