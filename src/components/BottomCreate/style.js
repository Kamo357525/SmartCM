import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  bottom:{
    width:'100%',
    height:size[50],
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:size[10],
    backgroundColor:'#11493E',
  },
  text:{
    color:'white',
    fontSize:size[16],
    fontFamily:'Montserrat-Regular'
  },
});

export default style;
