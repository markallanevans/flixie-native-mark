import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: '#111133',
  },
  main_view: {
    flex: 1,
    paddingTop: 20,
  },
  innercontainerGrid: {
    flex: 1,
    backgroundColor: '#111133',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
  },
  innercontainerList: {
    flex: 1,
    backgroundColor: '#111133',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 2,
  },
  image: {
    alignSelf: 'flex-start',
    width: 90,
    height: 150,
  },
  title: {
    flex: 1,
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'rgba(50,50,100,0.2)',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
  },
  vote_average_container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: '#ee0022',
    borderRadius: 20,
    opacity: 0.9,
    borderColor: '#fff',
    borderWidth: 1,
  },
  vote_average_content: {
    padding: 2,
    color: '#fff',
  },
  caption: {
    flex: 2,
    backgroundColor: '#000',
    color: '#fff',
    opacity: 0.9,
    padding: 20,
    textAlign: 'justify',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: 120,
  },
  gridView: {
    display: 'none',
  },
});

export default styles;
