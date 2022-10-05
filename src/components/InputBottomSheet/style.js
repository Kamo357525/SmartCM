import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'grey',
    height:size[40],
    marginTop: size[10],
    paddingHorizontal:size[10],
  },
  itemText:{
    fontFamily:'Montserrat-Regular',
    fontSize:size[16],
    color:'grey',
  },

});

export default style;
