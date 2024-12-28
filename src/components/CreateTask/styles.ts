import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 54,
    gap: 4,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -30,
  },
  input: {
    fontSize: 16,
    color: "#F2F2F2",
    fontFamily: "Inter",
    backgroundColor: "#262626",
    height: 54,
    width: 271,
    padding: 16,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 54,
    width: 54,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
