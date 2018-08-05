import { Platform } from 'react-native';

const type = {
  base: (Platform.OS === 'ios' ? 'Avenir-Book' : 'sans-serif'),
  bold: (Platform.OS === 'ios' ? 'Avenir-Black' : 'sans-serif-condensed'),
  emphasis: (Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif'),
};

const size = {
  h1: 34,
  h2: 30,
  h3: 26,
  h4: 20,
  h5: 18,
  h6: 14,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.base,
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  caption: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
};

if (Platform.OS !== 'ios') {
  style.h3.fontStyle = 'italic';
  style.h6.fontStyle = 'italic';
}

export default {
  type,
  size,
  style,
};
