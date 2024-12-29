import { View, Text } from "react-native";

import { styles } from "./style";
import { EmptyTask } from "../EmptyTasks";

export function SummaryTasks() {
  return (
    <View>
      <View style={styles.summaryTasksContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.createdTasks}>Criadas</Text>
          <Text style={styles.counter}>0</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.completedTasks}>Concluídas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>

      {/* <EmptyTask /> */}
    </View>
  );
}
