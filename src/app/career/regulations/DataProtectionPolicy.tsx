import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

const DataProtectionPolicy = () => {
  return (
    <Box component="section">
      <Typography variant="h2">個人情報適正管理規程</Typography>
      <Box component="section">
        <List component="ul">
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                1.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="個人情報を取り扱う事業所内の職員の範囲は、有料職業紹介事業部の職員とする。個人情報取扱責任者は職業紹介責任者鈴木佑基とする。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                2.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="職業紹介責任者は、個人情報を取り扱う１に記載する事業所内の職員に対し、個人情報取扱いに関する教育・指導を年１回実施することとする。また、職業紹介責任者は、少なくとも５年に１回は職業紹介責任者講習会を受講するものとする。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                3.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="取扱者は、個人の情報に関して、当該情報に係る本人から情報の開示請求があった場合は、その請求に基づき本人が有する資格や職業経験等客観的事実に基づく情報の開示を遅滞なく行うものとする。さらに、これに基づき訂正（削除を含む。以下同じ。）の請求があったときは、当該請求が客観的事実に合致するときは、遅滞なく訂正を行うものとする。" />
            <ListItemText primary="また、個人情報の開示又は訂正に係る取扱いについて、職業紹介責任者は求職者等への周知に努めることとする。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                4.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求職者等の個人情報に関して、当該情報に係る本人からの苦情の申出があった場合については、苦情処理担当者は誠意を持って適切な処理をすることとする。なお、個人情報の取扱いに係る苦情処理の担当者は、職業紹介責任者鈴木佑基とする。" />
          </ListItem>
        </List>
        <Typography variant="body1">株式会社レクト事務所</Typography>
      </Box>
    </Box>
  );
};

export default DataProtectionPolicy;
