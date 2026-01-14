import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 20
  },

  title: {
    color: "#60A5FA",
    fontWeight: "700",
    fontSize: 28,
    marginTop: 20,
    fontFamily: "San-Francisco",

  },
  segment: {
  flexDirection: "row",
  backgroundColor: "#E5E7EB",
  borderRadius: 10,
  padding: 4,
  marginBottom: 24,
},

segmentButton: {
  flex: 1,
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: "center",
},

segmentActive: {
  backgroundColor: "#FFFFFF",
},

segmentText: {
  color: "#6B7280",
  fontWeight: "500",
},

segmentTextActive: {
  color: "#111827",
  fontWeight: "600",
},

field: {
  marginBottom: 16,
},

labelRow: {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: 10
},

label: {
  fontSize: 14,
  color: "#111827",
  fontWeight: "500",
},

forgot: {
  fontSize: 10,
  color: "#60A5FA",
  fontWeight: "500",
},

input: {
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
  padding: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",
},

passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
  paddingHorizontal: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",
},

passwordInput: {
  flex: 1,
  paddingVertical: 12,
},


  imgContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: "#F9FAFB",
    marginTop: 50
  },

  bgImage: {
    width: "100%",
    height: 150,
  },

  subtitle: {
    color: "#4B5563",
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "San-Francisco",
    marginTop: 10
  },

  button: {
    backgroundColor: "#60A5FA",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  buttonPressed: {
    backgroundColor: "#059669",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "San-Francisco",
  },

  disclaimer: {
    color: "#9CA3AF",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 30,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "San-Francisco",
  },
});
