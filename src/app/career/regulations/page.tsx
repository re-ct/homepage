import '../../globals.css';
import { Box, Typography } from '@mui/material';
import OperatingRules from './OperatingRules';
import DataProtectionPolicy from './DataProtectionPolicy';
import RefundPolicy from './RefundPolicy';
import FeeSchedule from './FeeSchedule';

export const metadata = {
  title: '求職者・求人者の皆様へのご案内 | Re:ProS Career',
  description:
    '株式会社レクトが運営する職業紹介事業Re:ProS Careerに係る情報を掲載しております。',
};

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '52px',
    mt: '52px',
    '>section': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '28px',
      fontSize: '14px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
      h2: {
        fontSize: '20px',
        paddingLeft: '16px',
        borderLeft: 'solid 4px #00298A',
        lineHeight: '1.4',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '16px',
        lineHeight: '1.4',
        fontWeight: 'bold',
      },
      section: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
      },
      ul: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        rowGap: '8px',
      },
      li: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& .MuiListItemIcon-root': {
          color: '#000',
          position: 'absolute',
          top: '0',
          left: '0',
          minWidth: '2em',
          maxWidth: '2em',
        },
        '& .MuiListItemText-root': {
          color: '#000',
          margin: '0',
          display: 'flex',
          flex: 'none',
          flexDirection: 'column',
          width: '100%',
          paddingLeft: '2em',
        },
      },
      '& .MuiTypography-body1': {
        fontSize: '14px',
        letterSpacing: '0.01em',
        lineHeight: '1.6',
      },
      '& .MuiTypography-body2': {
        fontSize: '14px',
        letterSpacing: '0.01em',
        lineHeight: '1.6',
        textAlign: 'right',
        marginTop: '20px',
      },
      dl: {
        marginTop: '8px',
        '>div': {
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          columnGap: '8px',
          '@media screen and (max-width:450px)': {
            gridTemplateColumns: '1fr',
          },
        },
        dt: {
          display: 'flex',
          justifyContent: 'space-between',
          '@media screen and (max-width:450px)': {
            justifyContent: 'flex-start',
          },
          '&::after': {
            content: '":"',
          },
        },
      },
      table: {
        '& .MuiTableCell-head': {
          backgroundColor: '#f5f5f5',
          '&:first-child': {
            maxWidth: '250px',
            minWidth: '250px',
          },
          '&:nth-child(2)': {
            maxWidth: '600px',
            minWidth: '600px',
          },
        },
        '& .MuiTableCell-body': {
          span: {
            fontSize: '12px',
          },
        },
      },
    },
  },
};

const regulations = () => {
  return (
    <main>
      <Box
        component="section"
        sx={{
          maxWidth: '940px',
          mx: 'auto',
          px: '20px',
          pt: '70px',
          pb: '100px',
        }}
      >
        <Typography variant="h1" sx={sxStyles.heading}>
          求職者・求人者の皆様へのご案内
        </Typography>
        <Typography sx={sxStyles.text}>
          職業紹介事業に係る情報を掲載しております。
        </Typography>
        <Box sx={sxStyles.contents}>
          <OperatingRules />
          <DataProtectionPolicy />
          <FeeSchedule />
          <RefundPolicy />
        </Box>
      </Box>
    </main>
  );
};

export default regulations;
