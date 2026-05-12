import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

const DataProtectionPolicy = () => {
  return (
    <Box component="section">
      <Typography variant="h2">返戻金制度について</Typography>
      <Box component="section">
        <Typography variant="h3">返戻金制度</Typography>
        <Typography variant="body1">
          採用決定者が就業開始後（入社日起算日とします）、自己都合による退職もしくは、採用決定者の責による解雇（退職日もしくは解雇日を算定日とします）となった場合（以下「退社等」という）、当社は求人者に、報酬の一部を下記のとおり返還するものとします。ただし、退社等が求人者の責に帰すべき事由に起因する場合はこの限りではありません。
        </Typography>
        <Box>
          <Typography variant="body1">
            記
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table aria-label="fee table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    退社等が入社後３か月以内の場合
                    <br />
                    <span>（報酬には消費税および地方消費税を含みます）</span>
                  </TableCell>
                  <TableCell>紹介手数料（成功報酬）の50%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2">
            以上
          </Typography>
        </Box>
        <Box component="dl">
          <Box component="div">
            <Box component="dt">許可番号</Box>
            <Box component="dd">23-ユ-303247</Box>
          </Box>
          <Box component="div">
            <Box component="dt">事業所の名称及び所在地</Box>
            <Box component="dd">
              株式会社レクト 事務所（愛知県豊川市御津町西方日暮50番地9 2F）
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataProtectionPolicy;
