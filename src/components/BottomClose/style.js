import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  bottom:{
    width:size[30],
    height:size[30],
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginLeft:'auto',
  },
  text:{
    color:'grey',
    fontSize:size[26],
    fontFamily:'Montserrat-bold',
  },
});

export default style;
