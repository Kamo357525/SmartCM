import { StyleSheet} from 'react-native';
import size from '../../assets/gStyle/resho';

const style=StyleSheet.create({
  container:{
    backgroundColor:'white',
    padding:size[10],
  },
  body:{
    backgroundColor:'white',
    height:'100%',
  },
  title:{
    fontFamily:'Montserrat-Regular',
    fontSize:size[22],
    textAlign:'center',
  },
  InfoTitle:{
    fontFamily:'Montserrat-Regular',
    fontSize:size[15],
    textAlign:'center',
  },
  filterBlock:{
    flexDirection:'row',
    width:'100%',
    height: size[30],
    backgroundColor:'#E7F2F2',
    borderRadius:size[4],
    marginVertical:size[25],
  },
  filterTitle:{
    width: '50%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:size[4],
  },
  filterText:{
    fontFamily: 'Montserrat-Bold',
  },
  mark:{
    marginLeft:'auto',
    color:'#347474',
    fontFamily: 'Montserrat-Bold',
    marginBottom: size[20],
  },
  image:{
    width:size[50],
    borderRadius:size[15],
    height:size[50],
    marginRight:size[20]
  },
  bookBlock:{
    flexDirection: 'row',
    marginBottom:size[10],
    alignItems: 'center',
  },
  active:{
    marginLeft: 'auto',
    width:size[10],
    height:size[10],
    borderRadius:size[50],
    backgroundColor:'#347474'
  },
  noNotification:{
    marginTop:size[50],
    justifyContent: 'center',
    alignItems:'center',
  },
  notificationTitle:{
    marginTop: size[10],
    fontFamily:'Montserrat-Bold',
    fontSize: size[16],
  }
})

export default style
