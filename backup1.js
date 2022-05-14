import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Dimensions } from "react-native-web";

import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
  VictoryLabel,
} from "victory-native";
import Svg, { Circle } from "react-native-svg";

const { width, height } = Dimensions.get("screen");
const App = (props) => {
  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          //style={{ data: { fill: "orange" } }}
          barWidth={15}
          width={width + 30}
          height={height / 5}
          labels={({ datum }) => `${datum._y}`}
          animate
          data={data}
          x="month"
          y="earnings"
        />
      </VictoryChart>
      <VictoryChart>
        <VictoryLine data={data} x="month" y="earnings" />
      </VictoryChart>
      <Svg viewBox="-50 100 400 400">
        <VictoryPie
          standalone={false}
          width={300}
          height={300}
          data={data}
          x="month"
          y="earnings"
          innerRadius={68}
          labelRadius={100}
          theme={VictoryTheme.material}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={150}
          y={150}
          text="Pie!"
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={50}
          y={50}
          text="Pie!"
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={320}
          y={120}
          text="Pie!"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const data = [
  {
    month: 0,
    earnings: 0,
  },
  {
    month: 1,
    earnings: 541,
  },
  {
    month: 2,
    earnings: 570,
  },
  {
    month: 3,
    earnings: 465,
  },
  {
    month: 4,
    earnings: 700,
  },
  {
    month: 5,
    earnings: 640,
  },
  {
    month: 6,
    earnings: 786,
  },
];
export default App;
