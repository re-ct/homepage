import React from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { commonSxStyles } from './Style';

interface CustomButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'default';
  showFreeLabel?: boolean;
  icon?: 'keyboard-arrow-right' | 'new-tab';
  href: string;
  isExternal?: boolean;
  gaLabel?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant,
  showFreeLabel = true,
  icon,
  href,
  isExternal = false,
  gaLabel,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'keyboard-arrow-right':
        return <KeyboardArrowRight />;
      case 'new-tab':
        return <OpenInNewIcon />;
      default:
        return null;
    }
  };

  const hasIcon = !!icon;

  return (
    <Button
      variant="contained"
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      sx={[
        {
          cursor: 'pointer',
          backgroundColor:
            variant === 'primary'
              ? commonSxStyles.color.accent
              : variant === 'secondary'
                ? commonSxStyles.color.white
                : 'transparent',

          color:
            variant === 'primary'
              ? commonSxStyles.color.white
              : variant === 'secondary'
                ? commonSxStyles.color.accent
                : commonSxStyles.color.white,
          border:
            variant === 'primary'
              ? 'none'
              : variant === 'secondary'
                ? 'solid 1px ' + commonSxStyles.color.accent
                : 'solid 1px ' + commonSxStyles.color.white,
          textTransform: 'none',
          padding: hasIcon ? '16px 20px 16px 25px' : '16px 20px 16px 20px',
          borderRadius: '50px',
          boxShadow: 'none',
          minWidth: '300px',
          transition: 'filter 0.3s',
          textShadow: 'none',
          columnGap: '8px',
          '@media screen and (max-width:450px)': {
            minWidth: 'auto',
            width: '100%',
          },
          '&:hover': {
            boxShadow: 'none',
            filter:
              variant === 'primary' ? 'brightness(0.8)' : 'brightness(0.9)',
          },
        },
        commonSxStyles.typography.buttonNormalText,
      ]}
      endIcon={getIcon()}
      data-ga={gaLabel}
    >
      {showFreeLabel && (
        <Typography
          component="span"
          sx={{
            backgroundColor:
              variant === 'primary'
                ? commonSxStyles.color.white
                : commonSxStyles.color.accent,
            color:
              variant === 'primary'
                ? commonSxStyles.color.accent
                : commonSxStyles.color.white,
            borderRadius: '4px',
            px: '6px',
            py: '2px',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          無料
        </Typography>
      )}
      {label}
    </Button>
  );
};

export default CustomButton;
