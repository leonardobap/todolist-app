import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CreateTask } from "../../components/CreateTask";
import { SummaryTasks } from "../../components/SummaryTasks";
import { CardTask } from "../../components/CardTask";

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <CreateTask />
      <SummaryTasks />

      <CardTask />
    </View>
  );
}
