import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { commonSxStyles } from './Style';

interface CustomButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  showFreeLabel?: boolean;
  icon?: 'arrow-right' | 'new-tab';
  href: string;
  isExternal?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = 'primary',
  showFreeLabel = true,
  icon,
  href,
  isExternal = false,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'arrow-right':
        return <ArrowForwardIcon />;
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
          backgroundColor:
            variant === 'primary'
              ? commonSxStyles.color.primary
              : commonSxStyles.color.white,
          color:
            variant === 'primary'
              ? commonSxStyles.color.white
              : commonSxStyles.color.primary,
          textTransform: 'none',
          padding: hasIcon ? '16px 20px 16px 25px' : '16px 20px 16px 20px',
          borderRadius: '50px',
          boxShadow: 'none',
          minWidth: '300px',
          transition: 'filter 0.3s',
          '&:hover': {
            boxShadow: 'none',
            filter: 'brightness(0.8)',
          },
        },
        commonSxStyles.typography.buttonNormalText,
      ]}
      endIcon={getIcon()}
    >
      <Box
        component="span"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: showFreeLabel ? '8px' : '0px',
        }}
      >
        {showFreeLabel && (
          <Typography
            component="span"
            sx={{
              backgroundColor:
                variant === 'primary'
                  ? commonSxStyles.color.white
                  : commonSxStyles.color.primary,
              color:
                variant === 'primary'
                  ? commonSxStyles.color.primary
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
      </Box>
    </Button>
  );
};

export default CustomButton;
