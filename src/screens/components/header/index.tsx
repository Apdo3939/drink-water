import React from "react";
import { View, Text } from "react-native";

import { theme } from "../../../styles/theme";
import { cups } from "../../../utils/cups";
import { styles } from "./stylesHeader";

type HeaderProps = {
  ml: number;
  percent: number;
};

export function Header({ ml, percent }: HeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>{ml.toFixed(2)}ml</Text>
          <Text style={styles.label}>
            Beber água diariamente é fundamental para o bom funcionamento do
            nosso organismo.
          </Text>
        </View>
        <View style={styles.cups}>
          {cups.map((value) => (
            <View key={String(value)}>
              <Text style={styles.label}>Cup</Text>
            </View>
          ))}
        </View>
        <Text style={styles.label}>{percent}%</Text>
      </View>
    </>
  );
}
