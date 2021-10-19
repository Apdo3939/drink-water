import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import { Fontisto } from "@expo/vector-icons";
import { Header } from "../components/header";
import { styles } from "./stylesHome";
import { theme } from "../../styles/theme";

const { width } = Dimensions.get("screen");

export default function Home() {
  const heigthAnimated = { value: 100 };
  const waveAnimated = { value: 5 };
  return (
    <>
      <View style={styles.container}>
        <Header ml={0} percent={0} />
        <Svg
          width={width}
          height={heigthAnimated.value}
          viewBox={`0 0 ${width} ${heigthAnimated.value}`}
        >
          <Path
            d={`M 0 0
                Q 45 ${waveAnimated.value} 90 0
                T 180 0
                T 270 0
                T 360 0
                T 900 0
                T 540 0
                V ${heigthAnimated.value}
                H 0
                Z
              `}
            fill={theme.colors.blue100}
          />
        </Svg>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Svg width={120} height={120}>
              <Circle
                cx="60"
                cy="60"
                r="40"
                fill={theme.colors.blue100}
                strokeWidth={15}
                stroke={theme.colors.blue90}
                strokeOpacity={0.5}
              />
            </Svg>
            <Fontisto
              name="blood-drop"
              size={32}
              color={theme.colors.blue90}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
