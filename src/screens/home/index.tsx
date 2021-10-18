import React from "react";
import { Text, View } from "react-native";
import { theme } from "../../styles/theme";
import { styles } from "./styles";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
}
