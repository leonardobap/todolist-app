import { View, Text, TouchableOpacity } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

type TaskProps = {
  name: string;
  isCompleted: boolean;
  onRemove: () => void;
  onCompleteTask: (isCompleted: boolean) => void;
};

export function CardTask({
  name,
  onCompleteTask,
  onRemove,
  isCompleted,
}: TaskProps) {
  return (
    <View style={styles.cardTaskContainer}>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          onPress={(isCompleted) => onCompleteTask(isCompleted)}
          size={25}
          fillColor={isCompleted ? "#5E60CE" : "#4EA8DE"}
          innerIconStyle={{ borderWidth: 2 }}
        />
      </View>

      <View style={styles.taskDescriptionContainer}>
        <Text style={isCompleted ? styles.taskCompleted : styles.task}>
          {name}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={onRemove}>
          <Trash color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
