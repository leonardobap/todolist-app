import { View, Text } from "react-native";

import { styles } from "./style";

interface Task {
  name: string;
  isCompleted: boolean;
  id: string;
}

interface TasksProps {
  tasks: Task[];
}

export function SummaryTasks({ tasks }: TasksProps) {
  const completedTasks = tasks.filter(tasks => {
    return tasks.isCompleted
  })

  return (
    <View>
      <View style={styles.summaryTasksContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.createdTasks}>Criadas</Text>
          <Text style={styles.counter}>{tasks.length}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.completedTasks}>Concluídas</Text>
          <Text style={styles.counter}>{completedTasks.length}</Text>
        </View>
      </View>
    </View>
  );
}
