import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function EmptyTask() {
  return (
    <View style={styles.emptyTaskContainer}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/clipboard.png")} />

        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
