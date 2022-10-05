import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  itemBlock: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    flexDirection:'row',
    marginBottom:size[20],
    alignItems:'center'
  },
  item: {
    color:'#11493E',
    fontSize:size[18],
    fontFamily:'Montserrat-Regular',
  },
  children:{
    marginLeft: size[30],
  }
});

export default style;
