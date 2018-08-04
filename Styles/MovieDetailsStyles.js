import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#111133',
  },
  details: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    backgroundColor: '#000',
    opacity: 0.9,
  },
  overview: {
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    marginLeft: 10,
    marginRight: 10,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default styles;
