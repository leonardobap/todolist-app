import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CreateTask } from "../../components/CreateTask";
import { SummaryTasks } from "../../components/SummaryTasks";
import { CardTask } from "../../components/CardTask";
import { useEffect, useState } from "react";
import { EmptyTask } from "../../components/EmptyTasks";

interface Task {
  name: string;
  isCompleted: boolean;
  id: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(task: Task) {
    setTasks((prevState) => [...prevState, task]);
  }

  function handleTaskRemove(taskToRemove: Task) {
    setTasks((prevState) =>
      prevState.filter((task) => task.id !== taskToRemove.id)
    );
  }

  function handleCompleteTask(isChecked: boolean, taskToUpdate: Task) {
    const tasksUpdated = tasks.map((task) =>
      task.id === taskToUpdate.id ? { ...task, isCompleted: isChecked } : task
    );

    setTasks(tasksUpdated)
  }

  return (
    <View style={styles.homeContainer}>
      <Header />

      <CreateTask onCreateTask={handleNewTask} />
      <SummaryTasks tasks={tasks} />

      <FlatList
        style={styles.flatList}
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={(task) => (
          <CardTask
            name={task.item.name}
            onRemove={() => handleTaskRemove(task.item)}
            isCompleted={task.item.isCompleted}
            onCompleteTask={(isCompleted) =>
              handleCompleteTask(isCompleted, task.item)
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyTask />}
      />
    </View>
  );
}
