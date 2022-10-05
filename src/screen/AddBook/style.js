import { StyleSheet} from 'react-native';
import size from '../../assets/gStyle/resho';

const style=StyleSheet.create({
  body:{
    height:'100%',
    width:size[313],
    marginLeft:'auto',
    backgroundColor:'white',
    marginRight:'auto',
  },
  contener:{
    backgroundColor:'white',
  },
  title:{
    fontFamily:'Montserrat-Regular',
    fontSize:size[18],
    textAlign:'center',
    marginTop:size[20],
  },
  dateInfo:{
    marginVertical:size[10],
  }
})

export default style
