import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  imgContainer: {
    height: height * 0.58,
    width: "100%",
  },

  bgImage: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 75,
    height: 75,
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: "flex-start",
  },

  brandingContainer: {
    position: "absolute",
    top: 35,
    left: 12,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  brandingText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: -10,
    fontFamily: "Century Gothic",
  },
  brandingTextHighlight: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Century Gothic",
  },
});
