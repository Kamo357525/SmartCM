import { StyleSheet } from 'react-native';
import size from '../../../../assets/gStyle/resho';

const styles = StyleSheet.create({
  body:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    height:size[180],
  },
  data: {
    fill: '#83B7AD',
    width: size[18],
  },
  tickLabels: {
    fontFamily:'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: size[16],
    lineHeight: size[20],
    fill: '#616062',
  },
  axis:{
    position: 'absolute',
    bottom: size[5],
  }
});

export default styles;
