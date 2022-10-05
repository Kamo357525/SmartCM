import { StyleSheet} from 'react-native';
import size from '../../assets/gStyle/resho';

const style=StyleSheet.create({
  activities:{
    textAlign:'center',
    fontSize:size[16],
    color:'#1B3131',
    fontFamily:'Montserrat-Bold',
  },
  body:{
    padding:size[15],
    backgroundColor:'white',
    height:'100%',
    flex:1,
  },
  week: {
    textAlign: 'left',
    marginVertical:size[10],
  }
})

export default style
