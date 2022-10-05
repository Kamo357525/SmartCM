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
    marginTop:size[40],
  },
  input:{
    width: '100%',
    height: size[60],
    marginBottom:size[20]
  },
  btnBlock:{
    marginTop:size[30],
    flexDirection:'row',
    justifyContent:'space-around'
  },
  btnUpdate:{
    backgroundColor: '#11493E',
    width:size[130],
    height:size[40],
    alignItems:'center',
    justifyContent:'center'
  },
  btnDelete:{
    backgroundColor: 'red',
    width:size[130],
    height:size[40],
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'white',
    fontSize:size[18],
  }
})

export default style
