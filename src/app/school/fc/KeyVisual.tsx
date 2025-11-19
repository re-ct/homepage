import { Box, Typography } from '@mui/material';
import image from '../../../../public/image/school/fc/KeyVisual_image.webp';
import { commonSxStyles } from '../components/Style';


const sxStyles = {
  wrap: {
    backgroundColor: commonSxStyles.color.primary[100],
    py: 5,
    '@media screen and (max-width:768px)': {
      pt: "37px",
      pb: 0,
    }
  },
  contents: {
    maxWidth: 'calc(1200px + 32px)',
    px: 2,
    mx: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width:768px)': {
      flexDirection: "column",
      px: 0,
    }
  },
  imageBox: {
    width: '38%',
    maxWidth: '448px',
    '@media screen and (max-width:768px)': {
      position: "relative",
      mt: 2,
      width: "100%",
      maxWidth: "100%",
    }
  },
  imageBg: {
    display: "none",
    '@media screen and (max-width:768px)': {
      display: "block",
      position: "absolute",
      top: "-1px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      aspectRatio: "422 / 145",
      backgroundImage: "linear-gradient(to bottom, rgba(241, 245, 253, 1) 0%, rgba(241, 245, 253, 0) 100%)",
      content: '""',
    }
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '40px',
    '@media screen and (max-width:768px)': {
      borderRadius: 0,
      width: "100%",
      verticalAlign: 'bottom',
    }
  },
  subCopy: {
    color: commonSxStyles.color.primary[900],
    fontSize: 'min(1.52777vw, 22px)',
    fontWeight: 'bold',
    letterSpacing: '0.07em',
    '@media screen and (max-width:768px)': {
      fontSize: '16px'
    }
  },
  mainCopy: {
    color: commonSxStyles.color.primary[900],
    fontSize: 'min(2.6389vw, 38px)',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    fontFamily: 'Arial,Roboto,Roboto Fallback,sans-serif',
    mt: 1,
    '@media screen and (max-width:768px)': {
      fontSize: '19px',
      mt: 2,
    },
    '& > br': {
      '@media screen and (max-width:768px)': {
        fontSize: '24px'
      },
    }
  },
  mainCopyEmphasis: {
    color: commonSxStyles.color.primary[900],
    fontSize: 'min(2.6389vw, 38px)',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    fontFamily: 'Arial,Roboto,Roboto Fallback,sans-serif',
    '@media screen and (max-width:768px)': {
      fontSize: '33px'
    },
    '& > br': {
      display: 'none',
      '@media screen and (max-width:768px)': {
        display: 'block',
      },
    }
  },
  pcTitle: {
    backgroundColor: commonSxStyles.color.primary[900],
    color: commonSxStyles.color.white,
    fontSize: 'min(1.25vw, 18px)',
    fontWeight: 'bold',
    letterSpacing: '0.07em',
    py: '3px',
    px: '12px',
    display: 'inline-block',
    mt: 4,
    '@media screen and (max-width:768px)': {
      display: "none",
    }
  },
  spTitle: {
    display: "none",
    '@media screen and (max-width:768px)': {
      backgroundColor: commonSxStyles.color.primary[900],
      color: commonSxStyles.color.white,
      fontSize: '13px',
      fontWeight: 'bold',
      letterSpacing: '0.07em',
      py: '3px',
      px: '12px',
      display: 'inline-block',
      mt: 2,
    },
    '& + br + &': {
      mt: 0.5,
      fontSize: '16px',
    }
  },
  textWrap: {
    '@media screen and (max-width:768px)': {
      px: 3,
      width: "100%"
    }
  }
}

const KeyVisual = () => {
  return (
    <Box
      sx={sxStyles.wrap}
    >
      <Box
      sx={sxStyles.contents}
      >
        <Box sx={sxStyles.textWrap}>
          <Typography sx={sxStyles.subCopy}>知識ゼロでも大丈夫！</Typography>
          <Typography sx={sxStyles.mainCopy}>プログラミング入門教材<strong>Scratch</strong>で</Typography>
          <Typography sx={sxStyles.mainCopyEmphasis}>あなたの空き時間を<br/>収益に変えよう</Typography>
          <Typography sx={sxStyles.pcTitle}>プログラミング教室 Re:ProS | フランチャイズオーナー募集</Typography>
          <Typography sx={sxStyles.spTitle}>プログラミング教室 Re:ProS</Typography><br/>
          <Typography sx={sxStyles.spTitle}>フランチャイズオーナー募集</Typography>
        </Box>
        <Box sx={sxStyles.imageBox}>
          <Box sx={sxStyles.imageBg}></Box>
          <Box
            component="img"
            src={image.src}
            sx={sxStyles.image}
            alt=""
            width={896}
            height={598}
          />
        </Box>
      </Box>
    </Box>
  )
};
export default KeyVisual;