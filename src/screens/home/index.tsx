import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { theme } from "../../styles/theme";
import { Header } from "../components/header";
import { styles } from "./stylesHome";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header ml={0} percent={0} />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
