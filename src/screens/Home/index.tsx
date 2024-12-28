import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CreateTask } from "../../components/CreateTask";

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <CreateTask />
    </View>
  );
}
