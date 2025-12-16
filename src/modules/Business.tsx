import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type Business = {
  id: string;
  title: string;
  detail: string;
  img: string;
  href: string;
};

const BusinessList: Business[] = [
  {
    id: '1',
    title: 'プログラミング教室 Re:ProS',
    detail: '学生向けのプログラミングスクール',
    img: 'service_programming.webp',
    href: '/school',
  },
  {
    id: '2',
    title: 'Re:ProS Career',
    detail: 'エンジニアのキャリア支援',
    img: 'service_career.webp',
    href: '/career',
  },
  {
    id: '3',
    title: '開発等の相談',
    detail: 'どんな案件でもまずはご相談ください！',
    img: 'service_soudan.webp',
    href: '/demand',
  },
]

const sxStyles = {
  section: {
    width: '100%',
    background: '#00298A',
    paddingBlock: '100px 140px',
  },
  wrap: {
    maxWidth: '932px',
    width: '100%',
    margin: '0 auto',
    paddingInline: '16px',
  },
  heading: {
    fontWeight: 'bold',
    letterSpacing: '5px',
    fontSize: '40px',
    color: '#fff',
  },
  caption: {
    fontSize: '17px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: '#7994D5',
    textAlign: 'left',
  },
  listWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(auto,290px)',
    columnGap: '36px',
    mt: '48px',
  },
  list: {
    padding: 0,
    '& > li': {
      padding: 0,
    },
    '& > li > a': {
      paddingBottom: '24px',
      borderBottom: 'solid 1px #fff',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: '1fr 28px',
      gridTemplateRows: 'auto',
      width: '100%',
    },
    '& > li + li > a': {
      paddingTop: '24px',
    }
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  },
  detail: {
    mt:'8px',
    fontSize: '14px',
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
  },
  listImage: {
    width: '100%',
    position: 'relative',
    aspectRatio: '290 / 332',
    '&>img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}

const Business = () => {
  return (
    <Box
      component="section"
      sx={sxStyles.section}
    >
      <Box
        component="section"
        sx={sxStyles.wrap}
      >
        <Typography
          variant="h2"
          sx={sxStyles.heading}
        >
          事業内容
        </Typography>
        <Typography
          variant="caption"
          component="span"
          sx={sxStyles.caption}
        >
          Service
        </Typography>
        <Box sx={sxStyles.listWrap}>
          <List sx={sxStyles.list}>
            {BusinessList.map((item) => (
              <ListItem key={item.id}>
                <Link href={item.href} target="_blank" rel="noopener">
                  <Typography variant="h3" sx={sxStyles.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={sxStyles.detail}>
                    {item.detail}
                  </Typography>
                  <OpenInNewIcon sx={{ fontSize: '28px',gridColumn: '2 / 3', gridRow: '1 / 10',}} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Box sx={sxStyles.listImage}>
          {BusinessList.map((item) => (
              <img
                key={item.id}
                width="536"
                height="302"
                src={`../../../image/top/${item.img}`}
                alt={item.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 12,
                }}
              />
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Business;
