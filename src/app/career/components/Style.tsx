export const commonSxStyles = {
  typography: {
    heading2: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontSize: '36px',
      lineHeight: '1.5',
      '@media screen and (max-width:450px)': {
        fontSize: '32px',
      },
    },
    heading3: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontSize: '20px',
      lineHeight: '1.7',
    },
    largeText: {
      fontSize: '16px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
    },
    normalText: {
      fontSize: '14px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
    },
    smallText: {
      fontSize: '12px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
    },
  },
  color: {
    primary: '#00298A',
    accent: '#EF6C00',
    black: '#000',
    white: '#fff',
    background: '#EEF3FF',
  },
};
