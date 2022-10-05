import {StyleSheet} from 'react-native';
import size from '../../../assets/gStyle/resho';

const style = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
  },
  image: {
    width: size[192],
    height: size[218],
    marginTop: size[68],
    marginLeft: size[92],
    marginRight: size[91],
  },
  forgotPassword: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: size[22],
    lineHeight: size[32],
    color: '#11493E',
    marginTop: size[53],
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  desc: {
    width: size[328],
    fontFamily: 'Montserrat-Regular',
    fontSize: size[14],
    lineHeight: size[16],
    letterSpacing: size[0.25],
    color: '#616062',
    marginTop: size[6],
    marginLeft: 'auto',
    marginRight:'auto',
  },
  userSvg: {
    position:'absolute',
    width:size[13],
    height:size[13],
    top:size[43],
    left:size[30]
  },
  email: {
    fontFamily: 'Montserrat-Regular',
    marginTop:size[32],
    marginBottom:size[22],
    marginLeft:'auto',
    marginRight:'auto',
  },
  button: {
    width: size[328],
    height: size[38],
    backgroundColor: '#11493E',
    borderRadius: size[4],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft:'auto',
  },
  sendText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FCFCFC',
    fontSize: size[14],
    lineHeight: size[16],
  },
  backLogin: {
    fontFamily: 'Montserrat-Regular',
    fontSize: size[14],
    lineHeight: size[17],
    color: '#949494',
  },
  backLoginView: {
    marginRight: size[23],
    alignItems: 'flex-end',
    marginTop: size[14],
  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
    color:'#11493E',
  },
  container: {
    flex: 1
  },
})

export default style;
