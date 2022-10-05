import { StyleSheet } from 'react-native';
import size from '../assets/gStyle/resho';

const style = StyleSheet.create({
  body: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: size[340],
    height: size[70],
  },
  addBlock:{
    position: 'absolute',
    width:size[150],
    height:size[150],
    marginLeft:size[151],
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: size[50]*-1
  },
  navBlock: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: size[17],
  },
  isActive: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft: size[23],
    borderRadius: 50,
    width: size[40],
    height: size[40],
  },
});
export default style;

