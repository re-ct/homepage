import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

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

const Company = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '100px 16px',
      }}
      position="relative"
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', letterSpacing: '5px', fontSize: '40px' }}
      >
        会社概要
      </Typography>
      <Typography
        variant="caption"
        align="left"
        component="span"
        sx={{
          fontSize: '17px',
          fontWeight: 'bold',
          letterSpacing: '3px',
          color: '#C2C2C2',
        }}
      >
        Company
      </Typography>
      <TableContainer style={{ marginTop: 40 }}>
        <Table size="medium">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                style={{
                  borderBottom: '1px solid #D9D9D9',
                  verticalAlign: 'text-top',
                }}
              >
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', padding: '24px 24px 24px 0' }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: '14px', padding: '24px 0' }}
                >
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
