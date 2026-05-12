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
      <Typography variant="h2">手数料</Typography>
      <Box>
        <Typography variant="body1">
          手数料には、消費税は含まれておりません。別途加算となります。
        </Typography>
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
      <Box component="section">
        <Typography variant="h3">手数料表(一般登録型)</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="fee table">
            <TableHead>
              <TableRow>
                <TableCell>サービスの種類及び内容</TableCell>
                <TableCell>手数料の額及び負担者</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  求人受理後、求人者に求職者を紹介するサービス
                  <br />
                  【職業紹介サービス】
                </TableCell>
                <TableCell>
                  成功報酬
                  <br />
                  （期間の定めのない雇用契約の紹介の場合）
                  <br />
                  当該求職者の就職後１年間に支払われる賃金（内定書や労働条件通知書等に記載されている額）の100％
                  <br />
                  （期間の定めのある雇用契約の紹介の場合）
                  <br />
                  当該求職者の就職後、雇用契約期間中（雇用期間が１年を超える場合は最大１年間分）に支払われる賃金（内定書や労働条件通知書等に記載されている額）の50％
                  <br />
                  <br />
                  手数料負担者は求人者とします。
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  求人の充足に向けた求人者に対する専門的な相談・助言サービス
                  <br />
                  【職業紹介の付加サービス】
                  <br />
                  <br />
                  <span>
                    ＊上記職業紹介サービスに加えて、より専門的な相談・助言の付加サービスを行う場合
                  </span>
                </TableCell>
                <TableCell>
                  成功報酬
                  <br />
                  当該求職者の就職後１年間に支払われる賃金（内定書や労働条件通知書等に記載されている額）の30％
                  <br />
                  <br />
                  手数料負担者は求人者とします。
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box component="section">
        <Typography variant="h3">手数料表(サーチ/スカウト型)</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="fee table">
            <TableHead>
              <TableRow>
                <TableCell>サービスの種類及び内容</TableCell>
                <TableCell>手数料の額及び負担者</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  特定の条件による特別の求職者の開拓やそのための調査・探索
                </TableCell>
                <TableCell>
                  着手金100,000円
                  <br />
                  活動1日あたり30,000円(または活動1時間あたり5,000円)
                  <br />
                  成功報酬
                  <br />
                  (期間の定めのない雇用契約の紹介の場合)
                  <br />
                  当該求職者の就職後１年間に支払われる賃金（内定書や労働条件通知書等に記載されている額）の35％(または500,000円)
                  <br />
                  上記のうちどちらか高い方とする
                  <br />
                  (期間の定めのある雇用契約の紹介の場合)
                  <br />
                  当該求職者の就職後、雇用契約期間中(雇用期間が1年を超える場合は最大1年間分)に支払われる賃金（内定書や労働条件通知書等に記載されている額）の35％(または500,000円)
                  <br />
                  上記のうちどちらか高い方とする
                  <br />
                  <br />
                  手数料負担者は求人者とします。
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box component="section">
        <Typography variant="h3">手数料表(再就職支援型)</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="fee table">
            <TableHead>
              <TableRow>
                <TableCell>サービスの種類及び内容</TableCell>
                <TableCell>手数料の額及び負担者</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  就職を容易にするための求職者に対する専門的な相談・助言
                </TableCell>
                <TableCell>
                  着手金30,000円
                  <br />
                  相談・助言終了時30,000円
                  <br />
                  成功報酬40,000円
                  <br />
                  <br />
                  手数料負担者は関係雇用主とします。
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  求人受理後、求人者に求職者を紹介するサービス【職業紹介サービス】
                </TableCell>
                <TableCell>
                  成功報酬
                  <br />
                  (期間の定めのない雇用契約の紹介の場合)
                  <br />
                  当該求職者の就職後１年間に支払われる賃金（内定書や労働条件通知書等に記載されている額）の35％(または500,000円)
                  <br />
                  上記のうちどちらか高い方とする
                  <br />
                  (期間の定めのある雇用契約の紹介の場合)
                  <br />
                  当該求職者の就職後、雇用契約期間中(雇用期間が1年を超える場合は最大1年間分)に支払われる賃金（内定書や労働条件通知書等に記載されている額）の35％(または500,000円)
                  <br />
                  上記のうちどちらか高い方とする
                  <br />
                  <br />
                  手数料負担者は求人者とします。
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DataProtectionPolicy;
