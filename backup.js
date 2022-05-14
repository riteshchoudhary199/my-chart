import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Dimensions } from "react-native-web";

import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
} from "victory-native";

const { width, height } = Dimensions.get("screen");
const App = (props) => {
  return (
    <ScrollView>
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
        <VictoryPie
          theme={VictoryTheme.material}
          data={data}
          x="month"
          y="earnings"
        />
      </View>
    </ScrollView>
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
