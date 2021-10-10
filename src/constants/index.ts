export default {
  API: {
    BASE: 'https://api-interview.vanhack.com/v1/',
    JOB_LIST: 'job',
  },
  DEFAULT_API_PARAMS: {
    JOB_LIST: '?skip=0&maxResult=50',
  },
  ROUTES: {
    HOME: 'HOME',
    FAV: 'FAVORITES',
    PROFILE: 'PROFILE',
  },
  ROUTE_STACK: {
    NAV_STACK: 'NAV_STACK',
  },
  NAV_BAR_ICONS: {
    HOME: 'person-outline',
    FAV: 'create-outline',
    PROFILE: 'search-outline',
  },
  VIDEO: {
    MAX_VIDEO_LENGTH: 60, // seconds
    MAX_NUMBER_FAVORITES: 100,
  },
  BACKGROUND_CARD: {
    IMAGE_LIST: [
      require('assets/card/card1.jpg'),
      require('assets/card/card2.jpeg'),
      require('assets/card/card3.jpeg'),
    ],
    ROTATION: 3
  }
};