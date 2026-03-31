import { Box, Typography } from '@mui/material';
import Heading2 from '../components/Heading2';
import { commonSxStyles } from '../components/Style';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const sxStyles = {
  wrap: {
    mt: '40px',
  },
  heading3: {
    paddingLeft: '12px',
    borderLeft: 'solid 3px' + commonSxStyles.color.primary,
    lineHeight: '1',
    fontWeight: 'bold',
  },
  list: {
    borderBottom: 'solid 1px' + commonSxStyles.color.border,
    paddingBottom: '20px',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr 265px',
    '& + &': {
      mt: '28px',
    },
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '16px',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  details: {
    marginTop: '8px',
  },
  price: {
    display: 'flex',
    alignItems: 'baseline',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    '@media screen and (max-width:768px)': {
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    '& > strong': {
      ml: '8px',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 1px 5px rgba(0,69,138,0.2)',
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: '6px 12px',
    columnGap: '8px',
    color: commonSxStyles.color.black,
    '> [data-testid="HelpOutlineIcon"]': {
      fontSize: '20px',
      color: commonSxStyles.color.grayText,
    },
  },
  dd: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    rowGap: '8px',
    '@media screen and (max-width:768px)': {
      alignItems: 'flex-start',
    },
  },
  tipList: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',
    '& + &': {
      marginTop: '8px',
    },
  },
  tipTitle: {
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr',
    alignItems: 'center',
    '&::before': {
      content: '"・"',
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      flexGrow: 1,
      mx: 1,
      borderBottom: '1px dotted' + commonSxStyles.color.border,
      position: 'relative',
      top: '-4px',
    },
  },
  tipPrice: {
    textAlign: 'right',
  },
  noteTitle: {
    fontWeight: 'bold',
  },
  noteText: {
    display: 'grid',
    gridTemplateColumns: '11px 1fr',
    columnGap: '6px',
    mt: '8px',
    '&+&': {
      mt: '6px',
    },
  },
};

const Plan = () => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 12,
        backgroundColor: commonSxStyles.color.background,
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Heading2 subText="plan" mainText="料金" />
        <Box component="section" sx={sxStyles.wrap}>
          <Typography component="h3" sx={sxStyles.heading3}>
            基本料金
          </Typography>
          <Box component="dl" sx={{ mt: '20px' }}>
            <Box sx={sxStyles.list}>
              <Box component="dt">
                <Typography
                  sx={[commonSxStyles.typography.largeText, sxStyles.title]}
                >
                  ご要望に沿った広告制作
                </Typography>
                <Typography
                  sx={[commonSxStyles.typography.smallText, sxStyles.details]}
                >
                  企画やラフをもとにインタラクティブ広告を制作し、HTMLファイルで納品いたします。
                  <br />
                  「完成済みのデザインデータをそのまま実装してほしい」というご依頼も大歓迎です。
                </Typography>
              </Box>
              <Box component="dd" sx={sxStyles.dd}>
                <Box
                  sx={[commonSxStyles.typography.normalText, sxStyles.price]}
                >
                  1時間につき{' '}
                  <Typography
                    component="strong"
                    sx={commonSxStyles.typography.heading3}
                  >
                    5,000
                  </Typography>
                  円 (税抜)
                </Box>
                <Tooltip
                  title={
                    <Box
                      component="dl"
                      sx={commonSxStyles.typography.smallText}
                    >
                      <Box sx={sxStyles.tipList}>
                        <Box component="dt" sx={sxStyles.tipTitle}>
                          デザインの実装のみ
                        </Box>
                        <Box component="dd" sx={sxStyles.tipPrice}>
                          8時間〜 (40,000円〜)
                        </Box>
                      </Box>
                      <Box sx={sxStyles.tipList}>
                        <Box component="dt" sx={sxStyles.tipTitle}>
                          デザイン作成から実装まで
                        </Box>
                        <Box component="dd" sx={sxStyles.tipPrice}>
                          12時間〜 (60,000円〜)
                        </Box>
                      </Box>
                      <Box sx={sxStyles.tipList}>
                        <Box component="dt" sx={sxStyles.tipTitle}>
                          訴求案の企画・構成からの伴走
                        </Box>
                        <Box component="dd" sx={sxStyles.tipPrice}>
                          40時間〜 (200,000円〜)
                        </Box>
                      </Box>
                    </Box>
                  }
                  arrow
                  placement="bottom-end"
                  slotProps={{
                    tooltip: {
                      sx: {
                        minWidth: '400px',
                        backgroundColor: commonSxStyles.color.white,
                        boxShadow: '0px 1px 5px rgba(0,69,138,0.2)',
                        padding: '20px 16px',
                        border: '1px solid #fff',
                        color: commonSxStyles.color.black,
                        '& .MuiTooltip-arrow': {
                          color: commonSxStyles.color.white,
                        },
                        '@media screen and (max-width:768px)': {
                          minWidth: '100%',
                          maxWidth: '100%',
                        },
                      },
                    },
                  }}
                >
                  <Button sx={sxStyles.button}>
                    <HelpOutlineIcon />
                    作業時間の目安
                  </Button>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="section" sx={sxStyles.wrap}>
          <Typography component="h3" sx={sxStyles.heading3}>
            追加料金
          </Typography>
          <Box component="dl" sx={{ mt: '20px' }}>
            <Box sx={sxStyles.list}>
              <Box component="dt">
                <Typography
                  sx={[commonSxStyles.typography.largeText, sxStyles.title]}
                >
                  リサイズ・別媒体向け調整
                </Typography>
                <Typography
                  sx={[commonSxStyles.typography.smallText, sxStyles.details]}
                >
                  1つの制作物を、異なるサイズやファイル形式に合わせて調整します。
                </Typography>
              </Box>
              <Box component="dd" sx={sxStyles.dd}>
                <Box
                  sx={[commonSxStyles.typography.normalText, sxStyles.price]}
                >
                  1サイズ追加ごとに{' '}
                  <Typography
                    component="strong"
                    sx={commonSxStyles.typography.heading3}
                  >
                    10,000
                  </Typography>
                  円 (税抜)
                </Box>
              </Box>
            </Box>
            <Box sx={sxStyles.list}>
              <Box component="dt">
                <Typography
                  sx={[commonSxStyles.typography.largeText, sxStyles.title]}
                >
                  広告の運用代行
                </Typography>
                <Typography
                  sx={[commonSxStyles.typography.smallText, sxStyles.details]}
                >
                  配信設定や月次の運用を行います。
                </Typography>
              </Box>
              <Box component="dd" sx={sxStyles.dd}>
                <Box
                  sx={[commonSxStyles.typography.normalText, sxStyles.price]}
                >
                  要相談
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={sxStyles.wrap}>
          <Typography
            sx={[commonSxStyles.typography.normalText, sxStyles.noteTitle]}
          >
            注意事項
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.smallText, sxStyles.noteText]}
          >
            <span>※</span>
            広告プラットフォームで利用する場合、利用条件はお客様にて事前にご確認ください。
            <br />
            納品後、アカウント側の制約で配信不可となった場合の返金は致しかねます。
          </Typography>
          <Typography
            sx={[commonSxStyles.typography.smallText, sxStyles.noteText]}
          >
            <span>※</span>
            複雑な条件分岐（診断結果が10パターン以上など）や、アニメーション要素が極端に多い場合などは、別途お見積りをいただく可能性がございます。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Plan;
