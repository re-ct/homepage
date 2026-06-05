import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Lato } from 'next/font/google';
import FadeInOnView from '../components/FadeInOnView';

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
    </Box>
  );
};

export default Company;
