import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  summaryTasksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 19,
    width: "100%",
    marginTop: 32,
    paddingLeft: 24,
    paddingRight: 24,
  },
  summaryItem: {
    flexDirection: "row",
    gap: 8,
  },
  counter: {
    backgroundColor: "#333",
    color: "#D9D9D9",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "bold",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  createdTasks: {
    color: "#4EA8DE",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  completedTasks: {
    color: "#8284FA",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
});
