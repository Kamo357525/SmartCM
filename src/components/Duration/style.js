import { StyleSheet} from 'react-native';
import size from '../../assets/gStyle/resho';

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
  },
  duration:{
    width:size[100],
    height:size[40],
    borderWidth:2,
    marginVertical:size[5],
    borderRadius:4,
    borderColor:'#1B3131',
    alignItems:'center',
    justifyContent:'center',
  },
  durationBlock:{
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    marginTop:size[15],
  }
})

export default style
