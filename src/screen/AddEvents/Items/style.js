import { StyleSheet} from 'react-native';
import size from '../../../assets/gStyle/resho';

const style=StyleSheet.create({
  info:{
    color:'black',
    textAlign: 'center',
    fontSize:size[14]
  },
  title:{
    fontFamily:'Montserrat-Bold',
    textAlign:'center',
    fontSize:size[20],
    color:'#11493E',
    paddingBottom:size[15],
  },
  body:{
    padding:size[15],
  }
})

export default style
