import { StyleSheet} from 'react-native';
import size from '../../assets/gStyle/resho';

const style=StyleSheet.create({
  body:{
    height:'100%',
    width:size[313],
    marginLeft:'auto',
    marginRight:'auto',
  },
  title:{
    fontFamily:'Montserrat-Regular',
    fontSize:size[18],
    textAlign:'center',
    marginTop:size[20],
  },
  input:{
    width: '100%',
    height: size[40],
    marginBottom:size[20]
  },
  addressSvg:{
    position:'absolute',
    marginLeft:size[290],
    marginTop: size[25],
  },
  description:{
    height:size[70],
    borderWidth:1,
    borderColor:'grey',
    alignItems:'flex-end',
  }
})

export default style
