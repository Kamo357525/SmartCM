import { StyleSheet } from "react-native";
import size from "../../../assets/gStyle/resho";

const style = StyleSheet.create({
  body: {
    padding: size[10],
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Montserrat-Regular",
    marginVertical: size[10],
    fontSize: size[22],
    color: "#11493E",
    marginLeft: size[40],
  },
  dateBlock: {
    flexDirection: "row",
    marginVertical: size[5],
    alignItems: "center",
  },
  text: {
    fontSize: size[18],
    color: "#616062",
    fontFamily: "Montserrat-Regular",
  },
  textVal: {
    fontSize: size[18],
    color: "#347474",
    position: "absolute",
    marginLeft: size[100],
    fontFamily: "Montserrat-Bold",
  },
  btn: {
    width: size[101],
    borderRadius: size[5],
    height: size[32],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnBlock: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: size[35],
  },
  cancel: {
    backgroundColor: "red",
    marginLeft: size[7],
  },
  accept: {
    backgroundColor: "#347474",
  },
  inp: {
    width: "100%",
    height: size[50],
    borderRadius: 7,
    marginTop: size[18],
    borderWidth: 1,
  },
  btnTitle:{
    color:'white',
    fontSize:size[14],
    fontFamily: "Montserrat-Bold",
  }
});


export default style;
