import size from "../../../../assets/gStyle/resho";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: size[10],
    marginBottom: size[25],
    shadowColor: "gray",
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  axis: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: size[16],
    lineHeight: size[20],
    fill: "#616062",
  },
  time: {
    fontSize: size[16],
    color: "#151522",
    fontFamily: "Montserrat-Regular",
  },
  statisticBlock: {
    width: "100%",
    marginVertical: size[3],
    paddingHorizontal:size[15],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: size[15],
    height: size[15],
    marginRight:size[10],
    borderRadius: 50,
  },
  title: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export default styles;
