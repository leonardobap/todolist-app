import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardTaskContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#333",
    maxHeight: 64,
    maxWidth: 327,
    padding: 12,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkBoxContainer: {
    width: 24,
  },
  taskDescriptionContainer: {
    width: 235,
  },
  description: {
    fontSize: 14,
    color: "#F2F2F2",
    fontFamily: "Inter",
  },
});
