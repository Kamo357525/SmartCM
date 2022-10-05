import { StyleSheet } from "react-native";
import size from "../../../../assets/gStyle/resho";

const styles = StyleSheet.create({
  body: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    height: size[280],
    backgroundColor: "white",
    marginTop: size[20],
    borderRadius: size[10],
    marginBottom: size[20],
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  axis: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: size[11],
    lineHeight: size[13],
    fill: "#616062",
  },
  axisVertical:{

  }
});

export default styles;
