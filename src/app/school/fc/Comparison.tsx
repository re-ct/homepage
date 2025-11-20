import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import { ReactNode } from 'react';

type SchoolInformation = {
  id: number;
  company: string | ReactNode; 
  initialCost: string | ReactNode; 
  royalty: string | ReactNode;
  skill: string | ReactNode;
  age: string | ReactNode;
  period: string | ReactNode;
};


const schoolInformation: SchoolInformation[] = [
  {
    id: 1,
    company: <>Re:ProS</>,
    initialCost: <><strong>30</strong>万円(税抜)</>,
    royalty: <><span>1教室の月額利用料(固定)</span><br/><strong>1</strong>万円(税抜)</>,
    skill: <>Scratchのみ</>,
    age: <>小学生〜中学生 </>,
    period: <><strong>6</strong>ヶ月<span> ※以降自動更新</span></>,
  },
  {
    id: 2,
    company: <>A社</>,
    initialCost: <><strong>40</strong>万円(税抜)</>,
    royalty: <><span>1教室の月額利用料(固定)</span><br/><strong>5</strong>万円(税抜)</>,
    skill: <>ScratchJr、Scratch、Unity、C# など</>,
    age: <>小学生～中学生</>,
    period: <>不明</>,
  },
  {
    id: 3,
    company: <>B社</>,
    initialCost: <><strong>100</strong>万円(税抜)</>,
    royalty: <><span>生徒一人あたり</span><br/><strong>1800</strong>円(税抜)</>,
    skill: <>ビジュアルプログラミング〜<br/>テキストプログラミングまで </>,
    age: <>小学生〜高校生 </>,
    period: <>3年<span> ※以降自動更新</span></>,
  },
]

const sxStyles = {
  content: {
    position: 'relative',
    width: '100%',
    backgroundColor: commonSxStyles.color.primary[100],
    pt: '100px',
    pb: '110px',
  },
  note: {
    mt: '20px',
    '@media screen and (max-width:948px)': {
      mt: '36px',
    }
  },
  tablePc: {
    mt: 5,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media screen and (max-width:948px)': {
      display: 'none',
    },
    '& thead': {
      '& th': {
        backgroundColor: '#D2E0FF',
        color: commonSxStyles.color.black,
        p: '20px 16px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '69px',
        fontSize: '18px',
        '&:nth-child(2)': {
          backgroundColor: commonSxStyles.color.primary[900],
          color: commonSxStyles.color.white,
          pt: '28px',
          borderRadius: '4px 4px 0 0',
        },
        '&:nth-child(3)': {
          borderRight: '2px solid'+commonSxStyles.color.white,
        },
      },
      '& tr': {
        display: 'grid',
        gridTemplateColumns: '180px 260px 230px 230px',
        alignItems: 'flex-end',
      }
    },
    '& tbody': {
      '& th': {
        backgroundColor: commonSxStyles.color.white,
        color: commonSxStyles.color.black,
        p: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #D2E0FF',
        flexDirection: 'column',
        borderLeft: '2px solid #D2E0FF',
        '& span': {
          fontSize: '12px',
        },
      },
      '& td': {
        p: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonSxStyles.color.white,
        color: commonSxStyles.color.black,
        fontSize: '14px',
        '& strong': {
          fontFamily: 'Arial,sans-serif',
          marginRight: '1px',
        },
        '&:nth-child(2)': {
          fontWeight: 'bold',
          borderRight: '2px solid' + commonSxStyles.color.primary[900],
          borderLeft: '2px solid' + commonSxStyles.color.primary[900],
          borderBottom: '2px solid' + commonSxStyles.color.primary[900],
          fontSize: '16px',
          '& span': {
            fontSize: '14px',
          },
          '& strong': {
            fontSize: '20px',
          }
        },
        '&:nth-child(3)': {
          borderRight: '2px solid #D2E0FF'
        },
        '&:not(:nth-child(2))': {
          borderBottom: '2px solid #D2E0FF',
          '& strong': {
            fontSize: '16px',
            fontWeight: 'normal',
          }
        },
        '&:last-child': {
          borderRight: '2px solid #D2E0FF',
        }
      },
      '& tr': {
        display: 'grid',
        gridTemplateColumns: '180px 260px 230px 230px',
        '&:last-child':{
          alignItems: 'flex-start',
          '& td': {
            '&:nth-child(2)': {
              pb: '20px',
              borderRadius: '0 0 4px 4px',
            }
          }
        }
      }
    }
  },
  tableSp : {
    display: 'none',
    '@media screen and (max-width:948px)': {
      display: 'block',
      marginTop: '52px',
    }
  },
  tableItemsWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
  },
  tableHeadingWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    position: 'sticky',
    top: '65px',
  },
  tableHeading: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonSxStyles.color.white,
    fontWeight: 'bold',
    border: 'solid 1px'+commonSxStyles.color.Gray[200],
    '&:nth-child(1)': {
      borderRadius: '6px 0 0 6px',
      backgroundColor: commonSxStyles.color.primary[900],
      color: commonSxStyles.color.white,
      border: 'none',
    },
    '&:nth-child(3)': {
      borderRadius: '0 6px 6px 0',
    },
  },
  tableContentWrap: {
    marginTop: '14px',
    '& + &': {
      marginTop: '8px',
    }
  },
  tableContentTitle: {
    backgroundColor: '#D2E0FF',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
    marginBottom: '8px',
  },
  tableContentText: {
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:nth-child(1) p': {
      fontWeight: 'bold',
      '& strong': {
        fontWeight: 'bold',
      }
    },
    '&:nth-child(2)': {
      borderRight: '1px solid' + commonSxStyles.color.Gray[300],
      borderLeft: '1px solid' + commonSxStyles.color.Gray[300],
    },
    '& strong': {
      fontFamily: 'Arial,sans-serif',
      marginRight: '1px',
      fontSize: '14px',
      fontWeight: 'normal',
    },
  }
}

const Comparison = () => {
  return (
    <Box
      sx={sxStyles.content}>
        <Box
          sx={{
            maxWidth: '948px',
            px: '24px',
            mx: 'auto',
            '@media screen and (max-width:948px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={[
              {
                color: commonSxStyles.color.black,
                textAlign: 'center',
                '& > br': {
                  display: 'none',
                  '@media screen and (max-width:450px)': {
                    display: 'block',
                  },
                }
              },
              commonSxStyles.typography.heading2,
            ]}
            >
              他社との違い
          </Typography>
          <Box component="table" sx={sxStyles.tablePc}>
            <Box component="thead">
              <Box component="tr">
                <Box
                component="th"
                >
                  
                </Box>
                {schoolInformation.map((info) => (
                  <Box 
                    component="th" 
                    key={`header-${info.id}`}
                  >
                    {info.company}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="tbody">
              <Box component="tr">
                <Box component="th">初期費用<br/><span>(加盟費用・開業資金)</span></Box>
                {schoolInformation.map((info) => (
                  <Box component="td" key={`cost-${info.id}`}>
                    <Box>
                      {info.initialCost}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="tr">
                <Box component="th">ロイヤリティ</Box>
                {schoolInformation.map((info) => (
                  <Box component="td" key={`royalty-${info.id}`}>
                    <Box>
                      {info.royalty}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="tr">
                <Box component="th">指導言語</Box>
                {schoolInformation.map((info) => (
                  <Box component="td" key={`skill-${info.id}`}>
                    <Box>
                      {info.skill}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="tr">
                <Box component="th">対象年齢</Box>
                {schoolInformation.map((info) => (
                  <Box component="td" key={`age-${info.id}`}>
                    <Box>
                      {info.age}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="tr">
                <Box component="th">契約期間</Box>
                {schoolInformation.map((info) => (
                  <Box component="td" key={`period-${info.id}`}>
                    <Box>
                      {info.period}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={sxStyles.tableSp}>
            <Box sx={sxStyles.tableHeadingWrap}>
              {schoolInformation.map((info) => (
                <Typography 
                  key={`header-${info.id}`}
                  sx={[sxStyles.tableHeading,commonSxStyles.typography.largeText]}
                >
                  {info.company}
                </Typography>
              ))}
            </Box>
            <Box sx={sxStyles.tableContentWrap}>
              <Typography sx={sxStyles.tableContentTitle}>初期費用<br/><span>(加盟費用・開業資金)</span></Typography>
              <Box sx={sxStyles.tableItemsWrap}>
                {schoolInformation.map((info) => (
                  <Box key={`cost-${info.id}`} sx={sxStyles.tableContentText}>
                    <Typography sx={commonSxStyles.typography.smallText}>
                      {info.initialCost}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={sxStyles.tableContentWrap}>
              <Typography sx={sxStyles.tableContentTitle}>ロイヤリティ</Typography>
              <Box sx={sxStyles.tableItemsWrap}>
                {schoolInformation.map((info) => (
                  <Box key={`royalty-${info.id}`} sx={sxStyles.tableContentText}>
                    <Typography sx={commonSxStyles.typography.smallText}>
                      {info.royalty}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={sxStyles.tableContentWrap}>
              <Typography sx={sxStyles.tableContentTitle}>指導言語</Typography>
              <Box sx={sxStyles.tableItemsWrap}>
                {schoolInformation.map((info) => (
                  <Box key={`skill-${info.id}`} sx={sxStyles.tableContentText}>
                    <Typography sx={commonSxStyles.typography.smallText}>
                      {info.skill}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={sxStyles.tableContentWrap}>
              <Typography sx={sxStyles.tableContentTitle}>対象年齢</Typography>
              <Box sx={sxStyles.tableItemsWrap}>
                {schoolInformation.map((info) => (
                  <Box key={`age-${info.id}`} sx={sxStyles.tableContentText}>
                    <Typography sx={commonSxStyles.typography.smallText}>
                      {info.age}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={sxStyles.tableContentWrap}>
              <Typography sx={sxStyles.tableContentTitle}>契約期間</Typography>
              <Box sx={sxStyles.tableItemsWrap}>
                {schoolInformation.map((info) => (
                  <Box key={`period-${info.id}`} sx={sxStyles.tableContentText}>
                    <Typography sx={commonSxStyles.typography.smallText}>
                      {info.period}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Typography component="p" sx={[commonSxStyles.typography.smallText,sxStyles.note]}>
            ※A社、B社の情報は、各社公式ウェブサイト（2025年10月時点）に基づき作成しています。<br/>※比較対象は「子ども向けプログラミング教室」を軸とするフランチャイズの中から選定しています。<br/>※上記情報は、あくまで調査時点のものであり、各社の料金体系やサービス内容は予告なく変更される場合があります。最終的なご判断は、必ず各社へ直接お問い合わせの上、ご自身の責任で行ってください。
          </Typography>
      </Box>
    </Box>
  )
};
export default Comparison;