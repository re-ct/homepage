export const commonSxStyles = {
  typography: {
    headingSubText: {
      fontWeight: 'bold',
      letterSpacing: '0.07em',
      fontSize: '18px',
      '@media screen and (max-width:450px)': {
        fontSize: '14px',
      },
    },
    heading2: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontSize: '36px',
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
    buttonNormalText: {
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '0.06em',
    },
  },
  color: {
    primary: '#00298A',
    black: '#000',
    white: '#fff',
    background: '#EFF7FF',
    border: '#969696',
    grayText: '#545454',
  },
};
