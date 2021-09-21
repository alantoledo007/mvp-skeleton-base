export const colors = {
  black: '#2e1701',
  purple: '#7847F2',
  white: '#FFFFFF',
  green: '#99D5AA',
  orange: '#EA8432',
  gray_light: '#FAFAFA',
};
colors.black_gradient = ['#2e2201', colors.black, '#2e2201'];

colors.text = colors.black;
colors.text_light = '#ffea8c';

colors.primary = colors.purple;
colors.secondary = colors.orange;

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`,
};

export const themeDefault = {
  colors,
  sizes,
  devices,
};
