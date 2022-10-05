import { StyleSheet } from 'react-native';
import size from '../../../assets/gStyle/resho';

const style = StyleSheet.create({
  body:{
    backgroundColor:'white'
  },
  loginSvg: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: size[99],
    marginBottom: size[32],
  },
  btnAuthType:{
    width:size[200],
    height:size[30],
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#11493E',
    marginTop:size[15],
  },
  loginText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#11493E',
    fontSize: size[24],
    textAlign: 'center',
    lineHeight: size[32],
    letterSpacing: size[0.25],
  },
  error:{
    color:'red',
    fontSize: size[12],
    lineHeight: size[16],
  },
  inpBlock: {
    width: size[329],
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: size[20],
    alignItems: 'center',
  },
  inpEmail: {
    marginBottom: size[16],
  },
  svg: {
    marginTop: size[13],
    marginLeft: size[13],
    position: 'absolute',
  },
  eyeSvg: {
    marginLeft: size[296],
  },
  btnLogin: {
    width: size[328],
    height: size[38],
    backgroundColor: '#11493E',
    marginTop: size[8],
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnLoginText: {
    color: '#FCFCFC',
    fontSize: size[14],
    lineHeight: size[16],
    letterSpacing: size[0.25],
  },
  forgot: {
    marginTop: 14,
    fontFamily:'Montserrat-Regular',
    color: '#949494',
    marginLeft: 'auto',
  },
  loader:{
    width:'100%',
    height:'100%',
    position: 'absolute',
    zIndex:2,
    paddingTop:size[40],
    backgroundColor: 'rgba(255,255,255, 0.9)'
    },
  load:{
    top:size[19]*-1,
  },
  socBock:{
    marginTop:size[10],
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  socIcon:{
    marginLeft:size[20]
  }
});


export default style;
