import { View, Text, TextInput, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";

import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";

interface Task {
  name: string;
  isCompleted: boolean;
  id: string;
}

interface OnCreateTaskProps {
  onCreateTask: (task: Task) => void;
}

export function CreateTask({ onCreateTask }: OnCreateTaskProps) {
  const [task, setTask] = useState<Task>({
    name: "",
    isCompleted: false,
    id: "",
  });

  function handleNewTask() {
    onCreateTask(task);
    setTask({
      name: "",
      isCompleted: false,
      id: "",
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa"
        placeholderTextColor="#808080"
        onChangeText={(task) =>
          setTask({
            name: task,
            isCompleted: false,
            id: uuid.v4(),
          })
        }
        value={task.name}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewTask}>
        <PlusCircle size={22} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
