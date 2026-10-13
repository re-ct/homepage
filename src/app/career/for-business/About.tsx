'use client';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import FadeInOnView from '../../../components/FadeInOnView';
import logo from '../../../../public/image/career/logo_repros_career.svg';
import advisor from '../../../../public/image/career/advisors_watanabe_pc.webp';
import Image from 'next/image';
import { CheckCircle } from '@mui/icons-material';
import { CommonLink } from '../../../components/CommonLink';
import useMediaQuery from '@mui/material/useMediaQuery';

const sxStyles = {
  wrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.background,
    paddingBlock: '80px 110px',
    '@media screen and (max-width:768px)': {
      paddingBlock: '50px 80px',
    },
  },
  contentArea: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    paddingTop: '120px',
    marginTop: '-120px',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    columnGap: '8px',
  },
  summaryText: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '8px',
    fontSize: '22px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '16px',
      columnGap: '4px',
    },
    '.logo': {
      maxWidth: '240px',
      '@media screen and (max-width:768px)': {
        maxWidth: '170px',
      },
    },
    '>span': {
      marginTop: '3px',
      '@media screen and (max-width:768px)': {
        marginTop: '2px',
      },
    },
  },
  summaryMain: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: commonSxStyles.color.primary,
    borderBottom: 'solid 1px' + commonSxStyles.color.primary,
    '@media screen and (max-width:768px)': {
      borderBottom: 'none',
      textAlign: 'center',
      fontSize: '20px',
    },
    '>span': {
      fontSize: '22px',
      '@media screen and (max-width:768px)': {
        fontSize: '16px',
      },
    },
    '&:nth-child(2)': {
      marginTop: '12px',
    },
    '&:nth-child(3)': {
      marginTop: '8px',
      '@media screen and (max-width:768px)': {
        marginTop: '2px',
      },
    },
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 200px',
    columnGap: '36px',
    marginTop: '56px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      marginTop: '32px',
    },
  },
  contentText: {
    '@media screen and (max-width:768px)': {
      textAlign: 'center',
    },
    '& + &': {
      marginTop: '8px',
    },
  },
  list: {
    marginTop: '24px',
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      marginTop: '32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '8px',
    },
    '>li': {
      backgroundColor: commonSxStyles.color.white,
      padding: '16px 24px',
      borderLeft: '5px solid' + commonSxStyles.color.primary,
      display: 'flex',
      flexDirection: 'column',
      rowGap: '6px',
      '@media screen and (max-width:768px)': {
        borderLeft: 'none',
        borderTop: '2px solid' + commonSxStyles.color.primary,
        paddingInline: '16px',
      },
      '& + li': {
        marginTop: '8px',
        '@media screen and (max-width:768px)': {
          marginTop: 0,
        },
      },
    },
  },
  listTitle: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '4px',
    color: commonSxStyles.color.primary,
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
      rowGap: '8px',
      textAlign: 'center',
    },
  },
  listText: {
    '@media screen and (max-width:768px)': {
      fontSize: '12px',
    },
  },
  advisor: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    '@media screen and (max-width:768px)': {
      display: 'grid',
      gridTemplateColumns: '70px 1fr',
      gap: '12px',
      marginTop: '32px',
    },
    '.advisorImage': {
      maxWidth: '100%',
      height: 'auto',
      '@media screen and (max-width:768px)': {
        gridRow: '1/2',
        gridColumn: '1/2',
        maxWidth: '70px',
      },
    },
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '4px',
    '@media screen and (max-width:768px)': {},
  },
  link: {
    textDecoration: 'underline',
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    marginTop: '8px',
    '&:after': {
      content: '""',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid black',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  position: {
    gridColumn: '2/3',
    gridRow: '1/2',
  },
};

const About = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.wrap}>
      <FadeInOnView>
        <Box sx={sxStyles.contentArea} id="about">
          <Box sx={sxStyles.summary}>
            <Typography component="span" sx={sxStyles.summaryText}>
              <Image
                alt="Re:ProS(レプロス)Career"
                src={logo.src}
                width={518}
                height={46}
                priority={true}
                className="logo"
                style={{ width: '100%', height: 'auto' }}
              />
              <span>は</span>
            </Typography>
            <Typography component="span" sx={sxStyles.summaryMain}>
              エンジニア目線<span>での</span>スクリーニング
              {isSmallScreen && <br />}
              <span>を</span>徹底<span>した</span>
            </Typography>
            <Typography component="span" sx={sxStyles.summaryMain}>
              ITエンジニア専門エージェント<span>です。</span>
            </Typography>
          </Box>
          <Box sx={sxStyles.content}>
            <Box>
              <Typography
                sx={[sxStyles.contentText, commonSxStyles.typography.largeText]}
              >
                一般的なキャリアアドバイザーではなく、
                <br />
                <strong>開発現場を知る現役エンジニア</strong>が
                {isSmallScreen && <br />}アドバイザーとして介在。
              </Typography>
              <Typography
                sx={[sxStyles.contentText, commonSxStyles.typography.largeText]}
              >
                貴社が求める技術スタックや{isSmallScreen && <br />}
                開発フェーズを深く理解した上で、
                <br />
                「現場が本当に会うべき人材か」を{isSmallScreen && <br />}
                <strong>厳しく選別</strong>しています。
              </Typography>
              <Box component="ul" sx={sxStyles.list}>
                <Box component="li">
                  <Typography sx={sxStyles.listTitle}>
                    <CheckCircle style={{ fontSize: '18px' }} />
                    実技レベルでの{isSmallScreen && <br />}技術査定
                  </Typography>
                  <Typography
                    sx={[
                      commonSxStyles.typography.normalText,
                      sxStyles.listText,
                    ]}
                  >
                    候補者の実務における役割、コード品質などを多角的に評価。
                    {!isSmallScreen && <br />}
                    書類だけでは判別できない、実技レベルの情報を精査します。
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography sx={sxStyles.listTitle}>
                    <CheckCircle style={{ fontSize: '18px' }} />
                    現場の期待値に{isSmallScreen && <br />}沿ったマッチング
                  </Typography>
                  <Typography
                    sx={[
                      commonSxStyles.typography.normalText,
                      sxStyles.listText,
                    ]}
                  >
                    貴社の開発文化やチーム構成まで考慮し、相性を確認。
                    <br />
                    採用に関わる現場の負担を最小限に抑えます。
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={sxStyles.advisor}>
              <Image
                alt="Re:ProS(レプロス)Careerのアドバイザーの写真"
                src={advisor.src}
                width={219}
                height={219}
                className="advisorImage"
                style={{ width: '100%', height: 'auto' }}
              />
              <Box>
                <Typography
                  sx={[commonSxStyles.typography.smallText, sxStyles.position]}
                >
                  アドバイザー
                </Typography>
                <Typography
                  sx={[commonSxStyles.typography.normalText, sxStyles.name]}
                >
                  現役フルスタックエンジニア
                </Typography>
                <Typography sx={commonSxStyles.typography.smallText}>
                  ・エンジニア歴： 通算7年以上(現在も開発に従事)
                  <br />
                  ・経験領域：インフラ・バックエンド・フロントエンド(Web全般)、マネジメント、エンジニア採用(新卒・中途)
                </Typography>
                <Box sx={[commonSxStyles.typography.smallText, sxStyles.link]}>
                  <CommonLink
                    link={{
                      href: '#advisor',
                      external: false,
                    }}
                  >
                    <span>さらに詳しく見る</span>
                  </CommonLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default About;
