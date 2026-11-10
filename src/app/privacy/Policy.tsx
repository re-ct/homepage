import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const listUlStyle = { listStyle: 'disc', pl: '1.5rem' };
const h2TypographyStyle = { mt: 5 };
const listItemStyle = { paddingBottom: 0, paddingTop: 0, display: 'list-item' };

const Policy = () => {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第1条（個人情報）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第2条（個人情報の収集方法）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第3条（個人情報を収集・利用する目的）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社が個人情報を収集・利用する目的は以下のとおりです。
      </Typography>
      <List component={'ul'} sx={listUlStyle}>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="当社サービスの提供・運営のため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="メンテナンス、重要なお知らせなど必要に応じたご連絡のため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="当社の利用に関わる統計資料作成のため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="当社の経営管理・内部管理のため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="有料サービスにおいて、ユーザーに利用料金を請求するため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="当社が開発または提供する各種サービスに関する調査分析のため" />
        </ListItem>
        <ListItem component="li" sx={listItemStyle}>
          <ListItemText primary="上記の利用目的に付随する目的" />
        </ListItem>
      </List>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第4条（利用目的の変更）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第5条（個人情報の第三者提供）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
      </Typography>
      <List component={'ul'} sx={listUlStyle}>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="利用目的に第三者への提供を含むこと" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="第三者に提供されるデータの項目" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="第三者への提供の手段または方法" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="本人の求めに応じて個人情報の第三者への提供を停止すること" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="本人の求めを受け付ける方法" />
        </ListItem>
      </List>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第6条（WebサイトにおけるCookie等の取扱いについて）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社では、当社及び当社グループに関する情報提供の利便性向上、統計データ分析等の目的でCookie及びウェブ・ビーコン等の統計的なサイト利用情報を取得しています。
      </Typography>
      <List component={'ul'} sx={listUlStyle}>
        <ListItem sx={listItemStyle}>
          <Typography>
            <strong>Cookie（クッキー）:</strong>{' '}
            Webサーバがお客様のブラウザに送信する情報です。Cookieの受け取りを拒否する設定も可能ですが、当社Webサイトの一部が利用できなくなる場合があります。
          </Typography>
        </ListItem>
        <ListItem sx={listItemStyle}>
          <Typography>
            <strong>ウェブ・ビーコン:</strong>{' '}
            小さな画像ファイルで、訪問の有無や回数等の統計データを把握します。個人を特定する情報は含まれていません。
          </Typography>
        </ListItem>
      </List>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第7条（個人情報の開示）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、全部または一部を開示しないこともあります。
      </Typography>
      <List component={'ul'} sx={listUlStyle}>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合" />
        </ListItem>
        <ListItem sx={listItemStyle}>
          <ListItemText primary="その他法令に違反することとなる場合" />
        </ListItem>
      </List>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第8条（個人情報の訂正および削除）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、訂正、追加または削除を請求することができます。当社は、必要があると判断した場合、遅滞なく、訂正等を行います。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第9条（個人情報の利用停止等）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        当社は、本人から、個人情報が利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、利用停止または消去を求められた場合には、必要な調査を行います。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第10条（プライバシーポリシーの変更）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        本ポリシーの内容は、ユーザーに通知することなく変更することができます。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={[{ fontSize: 20, fontWeight: 600 }, h2TypographyStyle]}
      >
        第11条（お問い合わせ窓口）
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
        本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
        <br />
        Eメールアドレス：privacyinfo@re-ct.co.jp
      </Typography>

      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: '16px' }}>
          制定日：2024年10月1日
          <br />
          株式会社レクト <br />
          代表取締役社長 渡辺 優樹
        </Typography>
      </Box>
    </>
  );
};

export default Policy;
