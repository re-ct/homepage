import { Box, Typography } from '@mui/material';
import { commonSxStyles } from './Style';
import { alpha } from '@mui/system';

interface Heading2Props {
  subText: string;
  mainText: string;
  position?: 'center' | 'right';
  backGroundWhite?: boolean;
}

export const Heading2: React.FC<Heading2Props> = ({
  subText,
  mainText,
  position = 'center',
  backGroundWhite = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: position === 'right' ? 'flex-start' : 'center',
        textAlign: position === 'right' ? 'left' : 'center',
        gap: '4px',
        '@media screen and (max-width:450px)': {
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Typography
        variant="body2"
        component="span"
        sx={[
          {
            color: backGroundWhite
              ? alpha(commonSxStyles.color.primary, 0.4)
              : alpha(commonSxStyles.color.white, 0.4),
          },
          commonSxStyles.typography.headingSubText,
        ]}
      >
        {subText}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={[
          {
            color: backGroundWhite
              ? commonSxStyles.color.black
              : commonSxStyles.color.white,
          },
          commonSxStyles.typography.heading2,
        ]}
      >
        {mainText}
      </Typography>
    </Box>
  );
};

export default Heading2;
