import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export function CreateTask() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.button}>
        <PlusCircle size={22} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
