import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 54,
    gap: 4,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -30,
    paddingRight: 24,
    paddingLeft: 24,
  },
  input: {
    fontSize: 16,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    height: 54,
    width: 271,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    lineHeight: 16 * 1.4
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 54,
    width: 54,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1
  },
});
