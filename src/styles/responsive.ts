export const diviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

export const device = {
  mobileS: `(min-width: ${diviceSize.mobileS}px)`,
  mobileM: `(min-width: ${diviceSize.mobileM}px)`,
  mobileL: `(min-width: ${diviceSize.mobileL}px)`,
  tablet: `(min-width: ${diviceSize.tablet}px)`,
  laptop: `(min-width: ${diviceSize.laptop}px)`,
  laptopL: `(min-width: ${diviceSize.laptopL}px)`,
  desktop: `(min-width: ${diviceSize.desktop}px)`,
  desktopL: `(min-width: ${diviceSize.desktop}px)`,
};
