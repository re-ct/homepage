export const commonSxStyles = {
  typography: {
    heading2: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontSize: '36px',
      lineHeight: '1.6',
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
    primary: {
      900: '#24285B',
      400: '#407BFF',
      100: '#F1F5FD',
    },
    Orange: {
      400: '#EF6C00',
    },
    Yellow: {
      300: '#FFF652',
    },
    Gray: {
      900: '#000000',
      800: '#303030',
      700: '#5D5D5D',
      300: '#CCCCCC',
      200: '#DDDDDD',
    },
    white: '#fff',
    black: '#333',
  },
};
