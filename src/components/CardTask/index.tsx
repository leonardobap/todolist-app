import { View, Text, TouchableOpacity } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

export function CardTask() {
  return (
    <View style={styles.cardTaskContainer}>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="#4EA8DE"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "#4EA8DE" }}
          innerIconStyle={{ borderWidth: 2 }}
        />
      </View>

      <View style={styles.taskDescriptionContainer}>
        <Text style={styles.description}>Ir ao mercado</Text>
      </View>

      <View>
        <TouchableOpacity>
          <Trash color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
