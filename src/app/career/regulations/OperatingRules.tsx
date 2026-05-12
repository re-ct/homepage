import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

const OperatingRules = () => {
  return (
    <Box component="section">
      <Typography variant="h2">業務の運営に関する規程</Typography>
      <Box component="section">
        <Typography variant="h3">第１ 求人</Typography>
        <List component="ul">
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                1.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、取扱職種の範囲等（※）に関する限り、いかなる求人の申込みについてもこれを受理します。ただし、その申込みの内容が法令に違反したり、賃金、労働時間等の労働条件が通常の労働条件と比べて著しく不適当である場合、一定の労働関係法令（労働基準法及び職業安定法等）違反のある場合及び暴力団員などによる求人である場合には受理しません。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                2.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求人の申込みは、求人者又はその代理人が直接来所されて、所定の求人票により、お申込みください。直接来所できないときは、郵便、電話、ファックス又は電子メールでも差し支えありません。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                3.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求人申込みの際には、業務内容、賃金、労働時間、その他の雇用条件をあらかじめ書面の交付又は電子メールの使用により明示してください。ただし、紹介の実施について緊急の必要があるためあらかじめ書面の交付又は電子メールの使用による明示ができないときは、当該明示すべき事項をあらかじめこれらの方法以外の方法により明示してください。" />
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h3">第２ 求職</Typography>
        <List component="ul">
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                1.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、取扱職種の範囲等（※）に関する限り、いかなる求職の申込みについてもこれを受理します。" />
            <ListItemText primary="ただし、その申込みの内容が法令に違反する場合には受理しません。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                2.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求職申込みは、所定の求職票により本人がお申込みください。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                3.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="常に、日雇的又は臨時的な労働に従事することを希望される方は、本書に特別の登録をしておき、別に定める登録証の提示によって、求職申込みの手続きを省略致します。" />
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h3">第３ 紹介</Typography>
        <List component="ul">
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                1.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求職の方には、職業安定法第２条にも規定される職業選択の自由の趣旨を踏まえ、その御希望と能力に応ずる職業に速やかに就くことができるよう極力お世話致します。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                2.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求人の方には、その御希望に適合する求職者を極力お世話致します。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                3.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="紹介に際しては、求職の方に、紹介において従事することとなる業務の内容、賃金、労働時間その他の雇用条件をあらかじめ書面の交付又は希望される場合には電子メールの使用により明示します。ただし、紹介の実施について緊急の必要があるためあらかじめ書面の交付又は電子メールの使用による明示ができないときは、あらかじめそれらの方法以外の方法により明示を行います。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                4.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="求職の方を求人者に紹介する場合には、紹介状を発行しますから、その紹介状を持参して求人者へ行っていただきます。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                5.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="いったん求人、求職の申込みを受けた以上、責任をもって紹介の労をとります。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                6.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、労働争議に対する中立の立場をとるため、同盟罷業又は作業閉鎖の行われている間は求人者に、紹介を致しません" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                7.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="就職が決定しましたら求人された方及び関係雇用主から別表の手数料表に基づき、紹介手数料を申し受けます。" />
          </ListItem>
        </List>
      </Box>
      <Box component="section">
        <Typography variant="h3">第４ その他</Typography>
        <List component="ul">
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                1.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、職業安定機関及びその他の職業紹介事業者等と連携を図りつつ、当該事業に係る求職者等からの苦情があった場合は、迅速、適切に対応いたします。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                2.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所の行った職業紹介の結果については、求人者、求職者両方から本所に対して、その報告をしてください。" />
            <ListItemText primary="また、本所の職業紹介により期間の定めない労働契約を締結した求職者が就職から６箇月以内に離職（解雇された場合を除く。）したか否かについて、求人者から本所に対して報告してください。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                3.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、求職者又は求人者から知り得た個人的な情報は個人情報適正管理規程に基づき、適正に取り扱います。 " />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                4.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所が広告等により求人等に関する情報を提供するときは、当該情報について虚偽の表示又は誤解を生じさせる表示を行いません。また、当該情報について正確かつ最新の内容に保つため、求人者、求職者等から当該情報について提供の中止や内容の訂正の依頼があった場合や、本所が当該情報が正確、最新でないことを確認した場合は、遅滞なく対応するとともに、求人者又は求職者に対して定期的に当該情報が最新かどうか確認する又は当該情報の時点を明らかにする措置を講じます。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                5.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所は、求職者又は求人者に対し、その申込みの受理、面接、指導、紹介等の業務について、人種、国籍、信条、性別、社会的身分、門地、従前の職業、労働組合の組合員であること等を理由として差別的な取扱いは一切致しません。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                6.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所の取扱職種の範囲等は、取扱職種の範囲等（※）です。" />
          </ListItem>
          <ListItem component="li">
            <ListItemIcon>
              <Typography variant="body1" component="span">
                7.
              </Typography>
            </ListItemIcon>
            <ListItemText primary="本所の業務の運営に関する規定は、以上のとおりでありますが、本所の業務は、すべて職業安定法関係法令及び通達に基づいて運営されますので、ご不審の点は係員に詳しくおたずねください。" />
          </ListItem>
        </List>
        <Typography variant="body1">
          （※）取扱職種の範囲等
          <br />
          職種：全職種
          <br />
          地域：国内
        </Typography>
        <Typography variant="body2">
          2025年12月10日
          <br />
          代表者 株式会社レクト 代表取締役 渡辺 優樹
        </Typography>
      </Box>
    </Box>
  );
};

export default OperatingRules;
