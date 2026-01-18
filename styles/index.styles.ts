import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
  },

  imgContainer: {
    position: "relative",
    width: "100%",
    height: height * 0.65,
  },

  bgImage: {
    width: "100%",
    height: "100%",
  },

  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
  },
});
