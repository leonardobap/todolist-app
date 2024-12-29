import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  emptyTaskContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#333",
    minHeight: 208,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 16,
    fontFamily: "Inter",
    fontWeight: "bold",
    color: "#808080",
    fontSize: 14,
    lineHeight: 14 * 1.4
  },
  subtitle: {
    fontSize: 14,
    color: "#808080",
  },
});
