'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headingTeacherImg from '../../../public/image/school/heading_introduction.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const sxStyles = {
  textWrap: {
    textAlign: 'left',
    width: '100%',
    '@media screen and (max-width:450px)': {
      px: 3,
      mt: -3,
    },
  },
  pointWrap: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    '@media screen and (max-width:450px)': {
      flexDirection: 'column',
      '& + &': {
        mt: 5,
      },
    },
  },
  pointText: {
    background: '#24285B',
    px: 1,
    py: 0.5,
    fontWeight: 'bold',
    display: 'inline-block',
  },
  skill: {
    marginTop: '70px',
    '@media screen and (max-width:450px)': {
      padding: '40px 24px',
    },
  },
  skillContents: {
    background: '#F1F5FD',
    px: 3,
    py: 3,
  },
  balloon: {
    background: '#24285B',
    color: '#fff',
    py: 0.5,
    px: 4,
    position: 'relative',
    display: 'inline-block',
    fontWeight: 'bold',
    borderRadius: 30,
    width: 'auto',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      border: '8px solid transparent',
      borderTop: '8px solid #24285B',
    },
  },
  skillList: {
    mt: 2,
    gap: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    '& > li': {
      background: '#fff',
      borderRadius: 2,
      color: '#24285B',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      aspectRatio: 1,
      padding: 0,
    },
    '@media screen and (max-width:450px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  textLink: {
    textDecoration: 'underline',
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    '&:after': {
      content: '""',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid black',
    },
  },
  wrap: {
    paddingTop: '100px',
    paddingBottom: '100px',
    width: '800px',
    maxWidth: '100%',
    margin: '0 auto',
    '@media screen and (max-width:450px)': {
      width: '100%',
      paddingTop: '48px',
      paddingBottom: '80px',
    },
  },
  heading: {
    marginInline: '24px',
    '& > img': {
      width: '382px',
      height: 'auto',
    },
    '@media screen and (max-width:450px)': {
      '& > img': {
        width: '300px',
      },
    },
  },
};

const Introduction = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <Box sx={sxStyles.wrap}>
      <Typography variant="h2" sx={sxStyles.heading}>
        <img
          src={headingTeacherImg.src}
          alt="Re:ProSの特徴"
          width="602"
          height="86"
        />
      </Typography>
      <Box mt={5}>
        <Box sx={sxStyles.pointWrap}>
          <img
            src="../../../image/school/image_howToTeach.webp"
            alt="PCで作業をしている様子"
            width="300"
            style={{ marginRight: 'auto' }}
          />
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography
                component="span"
                variant="subtitle1"
                sx={[sxStyles.pointText, { color: '#fff' }]}
              >
                ビジュアル/テキストプログラミング
                <Typography
                  component="span"
                  variant="body1"
                  fontWeight={'bold'}
                >
                  を
                </Typography>
              </Typography>
              <br />
              <Typography
                component="span"
                variant="h6"
                sx={[sxStyles.pointText, { color: '#FFF652' }]}
                mt={0.5}
              >
                一貫して学べる
              </Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              視覚的にプログラミングを学べる{isSmallScreen && <br />}
              ビジュアルプログラミングから、
              <br />
              実際のコードを書くテキストプログラミングまで
              <br />
              一貫して学ぶことができる数少ないスクールです。
              <br />
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.pointWrap}>
          <img
            src="../../../image/school/image_workSituation.webp"
            alt="プログラミングを教えている様子"
            width="300"
            style={{ marginLeft: 'auto' }}
          />
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography
                component="span"
                variant="h6"
                sx={[sxStyles.pointText, { color: '#FFF652' }]}
              >
                現役エンジニアが講師
                <Typography
                  component="span"
                  variant="body1"
                  fontWeight={'bold'}
                  color={'#fff'}
                >
                  だから
                </Typography>
              </Typography>
              <br />
              <Typography
                component="span"
                variant="subtitle1"
                sx={[sxStyles.pointText, { color: '#fff' }]}
                mt={0.5}
              >
                現場での経験を基にした指導が特徴
              </Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              最新の業界動向や実践的なスキルを{isSmallScreen && <br />}
              直接学ぶことができます。
              <br />
              現場での経験を基にした実践的な指導が特徴です。
            </Typography>
            <Typography variant="body2" mt={2} sx={sxStyles.textLink}>
              <Link href="#school_teacher">講師について詳しく見る</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.pointWrap}>
          <img
            src="../../../image/school/image_classroom.webp"
            alt="プログラミング教室の様子"
            width="300"
            style={{ marginRight: 'auto' }}
          />
          <Box sx={sxStyles.textWrap}>
            <Typography>
              <Typography
                component="span"
                variant="h6"
                sx={[sxStyles.pointText, { color: '#fff' }]}
              >
                少人数の教室で
                <Typography
                  component="span"
                  variant="h6"
                  color={'#FFF652'}
                  fontWeight={'bold'}
                >
                  低価格
                </Typography>
              </Typography>
              <br />
              <Typography
                component="span"
                variant="subtitle1"
                sx={[sxStyles.pointText, { color: '#fff' }]}
                mt={0.5}
              >
                気軽に受講できる
              </Typography>
            </Typography>
            <Typography variant="body2" mt={2}>
              受講料は業界最安値レベルを維持。
              <br />
              多くの方に手軽にプログラミングを学ぶ機会を
              {isSmallScreen && <br />}
              提供しています。
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={sxStyles.skill}>
        <Box sx={sxStyles.skillContents}>
          <Typography sx={sxStyles.balloon}>さらに</Typography>
          <Typography
            mt={2}
            variant="subtitle2"
            component="p"
            color={'#24285B'}
          >
            プログラミングを学ぶことで
            <br />
            <Typography
              variant="h6"
              component="span"
              color={'#24285B'}
              fontWeight={'bold'}
            >
              さまざまなスキルが{isSmallScreen && <br />}身につきます
            </Typography>
          </Typography>
          <List sx={sxStyles.skillList}>
            <ListItem>
              論理的
              <br />
              思考
            </ListItem>
            <ListItem>
              問題解決
              <br />
              能力
            </ListItem>
            <ListItem>
              創造力
              <br />
              （想像力）
            </ListItem>
            <ListItem>
              プレゼン
              <br />
              能力
            </ListItem>
            <ListItem>社交性</ListItem>
            <ListItem>
              タイピング
              <br />
              能力
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
