import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import equal from '../../../../public/image/school/fc/fee_equal.svg';
import minus from '../../../../public/image/school/fc/fee_minus.svg';
import FadeInOnView from '../components/FadeInOnView';

const sxStyles = {
  table: {
    maxWidth: '600px',
    mx: 'auto',
    mt: 5,
    borderRadius: '12px',
    overflow: 'hidden',
    border: 'solid 1px' + commonSxStyles.color.primary[900],
    display: 'flex',
    flexDirection: 'column',
    '& th': {
      backgroundColor: commonSxStyles.color.primary[900],
      color: commonSxStyles.color.white,
      p: '20px',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      '@media screen and (max-width:450px)': {
        p: '20px 16px',
        fontSize: '14px',
      },
      '& > br': {
        display: 'none',
        '@media screen and (max-width:450px)': {
          display: 'block',
        },
      },
    },
    '& td': {
      p: '20px',
      fontWeight: 'bold',
      '@media screen and (max-width:450px)': {
        fontSize: '16px',
      },
      '& strong': {
        fontFamily: 'Arial,sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
      },
      '& > span': {
        '@media screen and (max-width:450px)': {
          fontSize: '12px',
        },
      },
    },
    '& tr': {
      display: 'grid',
      gridTemplateColumns: '170px 1fr',
      '@media screen and (max-width:450px)': {
        gridTemplateColumns: '120px 1fr',
      },
      '& + tr': {
        '& th': {
          borderTop: 'solid 1px' + commonSxStyles.color.white,
        },
        '& td': {
          borderTop: 'solid 1px' + commonSxStyles.color.primary[900],
        },
      },
    },
  },
  note: {
    maxWidth: '600px',
    mx: 'auto',
    mt: 2,
  },
  model: {
    borderRadius: '8px',
    border: 'solid 1px #C6C6C6',
    p: '32px 24px',
    mt: 5,
  },
  modelTitle: {
    color: commonSxStyles.color.primary[900],
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '8px',
  },
  modelTitlePoint: {
    borderRadius: '30px',
    backgroundColor: commonSxStyles.color.primary[900],
    color: commonSxStyles.color.white,
    px: '10px',
    fontWeight: 'bold',
    mr: 1,
  },
  modelBox: {
    mt: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '@media screen and (max-width:768px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto auto',
    },
    '& img': {
      '@media screen and (max-width:768px)': {
        display: 'none',
      },
    },
  },
  dlWrap: {
    py: '12px',
    px: '20px',
    backgroundColor: commonSxStyles.color.primary[100],
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '121px',
    '@media screen and (max-width:768px)': {
      minWidth: '100%',
    },
    '& > dd': {
      fontWeight: 'bold',
      '& strong': {
        fontFamily: 'Arial,sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
  },
  dlWrapProfit: {
    width: '17%',
    maxWidth: '152px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
  dlWrapFee: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: commonSxStyles.color.primary[100],
    py: '12px',
    px: '20px',
    borderRadius: '4px',
    '@media screen and (max-width:768px)': {
      gridRow: '2 / 3',
      gridColumn: '1 / 2',
      height: '100%',
      flexDirection: 'column',
    },
  },
  dlWrapSales: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: commonSxStyles.color.primary[100],
    py: '12px',
    px: '20px',
    borderRadius: '4px',
    '@media screen and (max-width:768px)': {
      gridRow: '1 / 3',
      gridColumn: '2 / 3',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  dlWrapFeeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pr: '13px',
    minWidth: '86px',
    '@media screen and (max-width:768px)': {
      minWidth: 'auto',
      pr: 0,
      pb: 1,
    },
    '& > dd': {
      fontWeight: 'bold',
      '& strong': {
        fontFamily: 'Arial,sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
  },
  ddFeeDetails: {
    pl: 2,
    borderLeft: 'dotted 1px #656565',
    minHeight: '49px',
    display: 'flex',
    alignItems: 'center',
    '@media screen and (max-width:768px)': {
      pl: 0,
      pt: 1,
      borderLeft: 'none',
      borderTop: 'dotted 1px #656565',
      minHeight: 'auto',
      width: '100%',
    },
    '& > ul': {
      listStyle: 'none',
      '& > li': {
        fontSize: '11px',
        '& > span': {
          fontSize: '10px',
        },
      },
    },
  },
  feeNote: {
    mt: '20px',
  },
  section: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    pt: 7,
    pb: 10,
  },
  sectionWrap: {
    maxWidth: '948px',
    px: '24px',
    pt: '120px',
    mt: '-120px',
    mx: 'auto',
    '@media screen and (max-width:450px)': {
      maxWidth: '100%',
    },
  },
  heading: {
    color: commonSxStyles.color.black,
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
};

const Fee = () => {
  return (
    <FadeInOnView>
      <Box sx={sxStyles.section}>
        <Box sx={sxStyles.sectionWrap} id="fee">
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading, commonSxStyles.typography.heading2]}
          >
            契約内容
          </Typography>
          <Box component="table" sx={sxStyles.table}>
            <Box component="tbody">
              <Box component="tr">
                <Box component="th">初期費用</Box>
                <Box component="td">
                  <Box component="strong">30</Box>万円
                  <Box component="span" sx={commonSxStyles.typography.normalText}>
                    {' '}
                    (税抜)
                  </Box>
                </Box>
              </Box>
              <Box component="tr">
                <Box component="th">ロイヤリティ</Box>
                <Box component="td">
                  <Box component="span" sx={commonSxStyles.typography.normalText}>
                    生徒数に関わらず
                  </Box>
                  <br />
                  月額固定 <Box component="strong">1</Box>万円
                  <Box component="span" sx={commonSxStyles.typography.normalText}>
                    {' '}
                    (税抜)
                  </Box>
                </Box>
              </Box>
              <Box component="tr">
                <Box component="th">契約期間</Box>
                <Box component="td">
                  最低 <Box component="strong">6</Box>ヶ月
                  <Box component="span" sx={commonSxStyles.typography.normalText}>
                    {' '}
                    (以降自動更新)
                  </Box>
                </Box>
              </Box>
              <Box component="tr">
                <Box component="th">教室運営の<br/>裁量</Box>
                <Box component="td">
                  <Box component="span" sx={commonSxStyles.typography.normalText}>
                    授業料や生徒数、教室の稼働時間など
                  </Box>
                  <br />
                  オーナー様の裁量で自由に決定してOK
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography
            component="p"
            sx={[commonSxStyles.typography.smallText, sxStyles.note]}
          >
            ※教室運営に必要な備品の準備・生徒の集客活動はご自身で行っていただきます。
            <br />
            ※契約内容、初期費用、ロイヤリティ、およびサポート内容は、予告なく変更となる場合がございます。
            <br />
            ※最終的な契約条件は、必ず個別面談および正式な契約書にてご確認ください。
          </Typography>
          <Box sx={sxStyles.model}>
            <Typography
              component="h3"
              sx={[commonSxStyles.typography.largeText, sxStyles.modelTitle]}
            >
              <Typography
                component="span"
                sx={[
                  sxStyles.modelTitlePoint,
                  commonSxStyles.typography.normalText,
                ]}
              >
                収益モデル例
              </Typography>
              週2回開講・受講生数50名とした場合
            </Typography>
            <Box component="dl" sx={sxStyles.modelBox}>
              <Box sx={[sxStyles.dlWrap, sxStyles.dlWrapProfit]}>
                <Box component="dt" sx={commonSxStyles.typography.normalText}>
                  利益
                </Box>
                <Box component="dd">
                  <Box component="strong">21</Box>万円/月
                </Box>
              </Box>
              <Box component="img" src={equal.src} alt="" width={19} height={8} />
              <Box sx={sxStyles.dlWrapSales}>
                <Box sx={sxStyles.dlWrapFeeBox}>
                  <Box component="dt" sx={commonSxStyles.typography.normalText}>
                    売上
                  </Box>
                  <Box component="dd">
                    <Box component="strong">40</Box>万円/月
                  </Box>
                </Box>
                <Box component="dd" sx={sxStyles.ddFeeDetails}>
                  <Box component="ul">
                    <Typography component="li">授業料：月額8000円</Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="img" src={minus.src} alt="" width={19} height={2} />
              <Box sx={sxStyles.dlWrapFee}>
                <Box sx={sxStyles.dlWrapFeeBox}>
                  <Box component="dt" sx={commonSxStyles.typography.normalText}>
                    費用
                  </Box>
                  <Box component="dd">
                    <Box component="strong">19</Box>万円/月
                  </Box>
                </Box>
                <Box component="dd" sx={sxStyles.ddFeeDetails}>
                  <Box component="ul">
                    <Typography component="li">ロイヤリティ：1万円</Typography>
                    <Typography component="li">
                      人件費：8万円
                      <Typography component="span">
                        ※講師1名(時給1250円、8時間換算)
                      </Typography>
                    </Typography>
                    <Typography component="li">その他経費：10万円</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              sx={[commonSxStyles.typography.smallText, sxStyles.feeNote]}
            >
              ※本収益モデルは試算であり、実際と異なる場合があります。稼働日数や定員に制限はありません。
            </Typography>
          </Box>
        </Box>
      </Box>
    </FadeInOnView>
  );
};
export default Fee;
