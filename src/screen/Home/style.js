import { StyleSheet } from 'react-native';
import size from '../../assets/gStyle/resho';

const style = StyleSheet.create({
  eventsBlock:{
    flex: 1,
    flexDirection: 'row',
    width: size[315],
    height: size[120],
    borderWidth: size[1],
    borderColor: 'gray',
    borderRadius:size[6],
    marginVertical:size[12],
    marginLeft:'auto',
    marginRight:'auto'
  },
  eventLine:{
    width: size[6],
    backgroundColor: '#F4C584',
    borderBottomLeftRadius:  size[6],
    borderTopLeftRadius: size[6],
  },
  eventDesc:{
    fontSize: size[12],
    fontFamily: 'Montserrat-Regular',
    color: '#616062',
    marginTop: size[12],
  },
  eventData:{
    color: '#949494',
    fontSize: size[12],
    fontFamily: 'Montserrat-Regular',
    marginRight: size[26],
  },
  eventContent:{
    width:size[315],
    padding: size[5],
  },
  eventHeader:{
    fontSize: size[16],
    color: '#616062',
    fontFamily: 'Montserrat-Regular',
  },
  body: {
    width: size[315],
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  flatListBlock: {
    height: size[350],
  },
  userName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: size[24],
    lineHeight: size[32],
    marginTop: size[6],
  },
  img: {
    height: size[145],
    width: '100%',
    marginTop: size[20],
  },
  taskCount: {
    color: '#FCFCFC',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: size[24],
    lineHeight: size[32],
    marginLeft: size[27],
    marginTop: size[80] * -1,
  },
  blockCalendar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: size[7],
    alignItems: 'center',
    width: size[24],
    height: size[24],
  },
  calendarBlock: {
    marginTop: size[18],
    marginBottom: size[18],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoDay: {
    fontSize: size[16],
    fontFamily: 'Montserrat-SemiBold',
    color: '#347474',
  },
  colorBlock: {
    borderRadius: size[4],
    padding: size[4],

  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: size[28],
    borderRadius: size[5],
    marginTop: size[70],
    backgroundColor: '#347474',
  },

  selectItem: {
    width: '33.333333%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: size[4],
    height: size[28],
  },
  selectText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: size[14],
  },

  calendar: {
    height: size[270],
    marginBottom:size[10]
  },
  tasksTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize:size[16],
  },
  tasksDate: {
    fontFamily:'Montserrat-Medium',
    fontSize:size[12]
  },
  tasksBlock: {
    borderRadius:size[4],
    fontFamily: 'Montserrat-Medium',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: size[315],
    height: size[55],
    backgroundColor: '#EDF3F4',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: size[20],
    paddingLeft: size[8],
    paddingRight: size[8],
    flexDirection: 'row',
    paddingTop: size[6],
  },
});

export default style;
