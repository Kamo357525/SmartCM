import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  body:{
    backgroundColor:'white',
    padding:size[10],
  },
  icon:{
    marginLeft:'auto',
    marginTop:size[30],
    marginBottom:size[30],
    marginRight:'auto',
  },
  create:{
    textAlign:'center',
    fontSize:size[20],
    fontFamily:'Montserrat-Bold',
  },
  title:{
    fontFamily:'Montserrat-Regular',
    textAlign:'center',
    marginVertical:size[20],
    fontSize:size[20],
  }
});

export default style;
