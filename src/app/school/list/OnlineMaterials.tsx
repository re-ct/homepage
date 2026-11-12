import { Box, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CommonLink } from '@/components/CommonLink';
import { movieList, udemyUserPage } from '@/lib/const/Movies';
import { commonSxStyles } from '../components/Style';

const sxStyles = {
  section: {
    pt: 7,
    pb: 10,
    px: 3,
    bgcolor: '#F5F5F5',
  },
  wrap: {
    maxWidth: '900px',
    mx: 'auto',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1.6',
    letterSpacing: '0.05em',
    color: commonSxStyles.color.black,
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
  text: {
    mt: 1,
    color: commonSxStyles.color.black,
    '& > br': {
      '@media screen and (max-width:450px)': {
        display: 'none',
      },
    },
  },
  list: {
    mt: 3,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    listStyle: 'none',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      gap: 2,
    },
    '& a': {
      display: 'block',
      height: '100%',
    },
  },
  listItemBox: {
    backgroundColor: commonSxStyles.color.white,
    borderRadius: '8px',
    boxShadow: '0px 0px 5px rgba(34, 106, 170, 0.1)',
    padding: '12px 12px 24px 12px',
    height: '100%',
    transition: 'opacity 0.3s linear',
    '&:hover': {
      opacity: 0.8,
    },
    '& > img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '4px',
    },
  },
  textContent: {
    mt: 2,
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    letterSpacing: '0.5px',
    lineHeight: '1.5',
    color: commonSxStyles.color.black,
    fontSize: '14px',
  },
  summary: {
    mt: 1,
    fontSize: '12px',
    letterSpacing: '0.1px',
    lineHeight: '1.5',
    color: commonSxStyles.color.black,
  },
  textLink: {
    mt: 4,
    mx: 'auto',
    textAlign: 'center',
    '& > a': {
      py: 1,
      borderRadius: 20,
      pl: 2,
      pr: 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      fontSize: '14px',
      fontWeight: 'bold',
      color: commonSxStyles.color.black,
      transition: 'background-color 0.3s linear',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.08)',
      },
    },
  },
};

const OnlineMaterials = () => {
  return (
    <Box component="section" sx={sxStyles.section}>
      <Box sx={sxStyles.wrap}>
        <Typography variant="h2" component="h2" sx={sxStyles.heading}>
          お近くに教室が
          <br />
          ない方へ
        </Typography>
        <Typography
          component="p"
          sx={[sxStyles.text, commonSxStyles.typography.normalText]}
        >
          ご自宅でもプログラミングを学べる動画教材を展開しています。
          <br />
          お住まいの地域を問わず、お子さまのペースで学習に取り組めます。
        </Typography>
        <Box component="ul" sx={sxStyles.list}>
          {movieList.map((item) => (
            <li key={item.id}>
              <CommonLink
                link={{ href: item.href, external: true }}
                gaLabel={`schoolList_${item.id}_link`}
              >
                <Box sx={sxStyles.listItemBox}>
                  <img
                    width="536"
                    height="302"
                    src={`/image/school/${item.img}`}
                    alt={item.title}
                  />
                  <Box sx={sxStyles.textContent}>
                    <Typography variant="h3" component="h3" sx={sxStyles.title}>
                      {item.title}
                    </Typography>
                    <Typography component="p" sx={sxStyles.summary}>
                      {item.summary}
                    </Typography>
                  </Box>
                </Box>
              </CommonLink>
            </li>
          ))}
        </Box>
        <Box sx={sxStyles.textLink}>
          <CommonLink
            link={{ href: udemyUserPage, external: true }}
            gaLabel="schoolList_movie_all"
          >
            動画教材をすべて見る
            <PlayCircleIcon />
          </CommonLink>
        </Box>
      </Box>
    </Box>
  );
};

export default OnlineMaterials;
