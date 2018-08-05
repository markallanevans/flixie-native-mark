import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const gap = 2;
const imageWidth = (screenWidth / 4) - (gap * 2);
const imageHeight = imageWidth * (120 / 90);

const metrics = {
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  screenWidth,
  screenHeight,
  sectionLarge: 120,
  mainScreenPadding: 20,
  marginHorizontal: 10,
  marginVertical: 10,
  baseMargin: 10,
  gridGap: 2,
  line: 1,
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  vote: {
    diameter: 30,
    margin: 5,
  },
};

export default metrics;
