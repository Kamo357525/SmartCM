import { StyleSheet} from 'react-native';
import size from '../../../assets/gStyle/resho';

const style=StyleSheet.create({
  projectItemBlock:{
    flexDirection:'row',
    marginBottom:size[10],
    alignItems:'center'
  },
  info:{
    color:'black',
    textAlign: 'center',
    fontSize:size[14]
  },
  projects:{
    color:'#11493E',
    fontSize:size[18],
    fontFamily:'Montserrat-Regular',
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
