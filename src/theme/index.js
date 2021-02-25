export const typographyVariants = {
  // [title]
  title: {
    fontSize: '90px',
    fontWeight: 'normal',
  },
  titleXS: {
    fontSize: '64px',
    fontWeight: 'normal',
  },
  // [subTitle]
  subTitle: {
    fontSize: '48px',
    fontWeight: '300',
  },
  // [paragraph1]
  logo: {
    fontSize: '38px',
    fontWeight: '400',
    lineHeight: '45.6px'
  },
  // [paragraph2]
  logoXS: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '21.6px',
  },
  // [smallestException]
  nav: {
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '33.6px',
  },
  navXS: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '21.6px',
  },
  projetoXS: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '28.8px',
  },
  projeto: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '38.4px',
  },
};

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
