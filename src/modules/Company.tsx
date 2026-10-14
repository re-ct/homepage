import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Lato } from 'next/font/google';
import Link from 'next/link';
import FadeInOnView from '../components/FadeInOnView';
import { colors } from '@mui/material';

const createData = (title: string, description: string) => {
  return { title, description };
};

const rows = [
  createData('会社名', '株式会社レクト'),
  createData('設立', '2024年6月3日'),
  createData('所在地', '愛知県豊川市御津町西方日暮1-12'),
  createData('代表', '渡辺 優樹'),
  createData('主な事業内容', '情報通信サービスの開発・運営'),
];

const lato = Lato({
  weight: ['900'],
  subsets: ['latin'],
  display: 'swap',
});

const sxStyles = {
  section: {
    maxWidth: '1032px',
    width: '100%',
    margin: '0 auto',
    padding: '130px 16px',
    position: 'relative',
    '@media screen and (max-width:768px)': {
      paddingTop: '100px',
    },
  },
  headingBox: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  heading: {
    fontFamily: lato.style.fontFamily,
    fontWeight: '900',
    fontSize: '65px',
    color: '#000000',
    letterSpacing: '0.02em',
    lineHeight: '1',
    '@media screen and (max-width:768px)': {
      fontSize: '52px',
    },
  },
  caption: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    color: '#000000',
    textAlign: 'left',
  },
  tableContainer: {
    marginTop: '52px',
  },
  tableRow: {
    borderBottom: '1px solid #D9D9D9',
    verticalAlign: 'text-top',
    '@media screen and (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
      pb: '20px',
      '>td,>th': {
        borderBottom: 'none',
        padding: 0,
      },
      '& + tr': {
        mt: '20px',
      },
    },
  },
  titleCell: {
    fontSize: '14px',
    padding: '24px 24px 24px 0',
    width: '160px',
  },
  descriptionCell: {
    fontSize: '16px',
    padding: '24px 0',
    color: '#000',
  },
  cardList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    mt: '72px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
      mt: '56px',
    },
  },
  card: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '4px',
    border: 'solid 1px rgba(150, 150, 150, 0.5)',
    overflow: 'hidden',
  },
  cardLink: {
    transition: 'background-color 0.3s ease',
    '&:hover': {
      '& .company__cardContentHeadingBox, & .company__cardContentHeadingBox span':
        {
          fontWeight: 'bold',
        },
    },
  },
  cardImage: {
    display: 'block',
    width: '100%',
    height: 'auto',
    aspectRatio: '442 / 131',
    objectFit: 'cover',
    backgroundColor: '#EFF7FF',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    py: '12px',
    px: '20px',
  },
  cardHeadingBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    transition: 'font-weight 0.3s ease',
  },
  cardCaption: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    '@media screen and (max-width:768px)': {
      fontSize: '14px',
    },
  },
  cardDescription: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    flexShrink: 0,
    color: '#969696',
    '@media screen and (max-width:768px)': {
      fontSize: '14px',
    },
  },
  cardArrow: {
    color: '#00298A',
    fontSize: '24px',
    flexShrink: 0,
    '@media screen and (max-width:768px)': {
      fontSize: '20px',
    },
  },
};

const Company = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <FadeInOnView>
        <Typography component="h2" sx={sxStyles.headingBox}>
          <Typography component="span" sx={sxStyles.heading}>
            Company
          </Typography>
          <Typography component="span" sx={sxStyles.caption}>
            会社情報
          </Typography>
        </Typography>
      </FadeInOnView>
      <TableContainer sx={sxStyles.tableContainer}>
        <Table size="medium">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title} sx={sxStyles.tableRow}>
                <TableCell align="left" sx={sxStyles.titleCell} component="th">
                  {row.title}
                </TableCell>
                <TableCell align="left" sx={sxStyles.descriptionCell}>
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FadeInOnView>
        <Box sx={sxStyles.cardList}>
          <Link href="/initiatives/" style={{ textDecoration: 'none' }}>
            <Box sx={[sxStyles.card, sxStyles.cardLink]}>
              <Box
                component="img"
                src="/image/top/initiatives.webp"
                alt=""
                width="540"
                height="296"
                sx={sxStyles.cardImage}
              />
              <Box sx={sxStyles.cardContent}>
                <Typography
                  component="h3"
                  className="company__cardContentHeadingBox"
                  sx={sxStyles.cardHeadingBox}
                >
                  <Typography component="span" sx={sxStyles.cardCaption}>
                    社内の取り組み
                  </Typography>
                </Typography>
                <ArrowForwardIcon sx={sxStyles.cardArrow} />
              </Box>
            </Box>
          </Link>

          <Box sx={sxStyles.card}>
            <Box
              component="img"
              src="/image/top/recruit.webp"
              alt=""
              width="540"
              height="296"
              sx={sxStyles.cardImage}
            />
            <Box sx={sxStyles.cardContent}>
              <Typography component="h3" sx={sxStyles.cardHeadingBox}>
                <Typography component="span" sx={sxStyles.cardCaption}>
                  採用情報
                </Typography>
              </Typography>
              <Typography component="p" sx={sxStyles.cardDescription}>
                現在募集しておりません
              </Typography>
            </Box>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};

export default Company;
