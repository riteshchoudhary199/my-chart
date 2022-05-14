import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Dimensions } from "react-native-web";
import { Card } from "react-native-paper";

import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
  VictoryLabel,
} from "victory-native";
import Svg, { Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const FinancialDashboard = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexGrow: 1, flexDirection: "row" }}>
          <VictoryChart>
            <VictoryBar
              //style={{ data: { fill: "orange" } }}
              barWidth={15}
              // width={width + 30}
              // height={height / 5}
              labels={({ datum }) => `${datum._y}`}
              data={data}
              x="month"
              y="earnings"
            />
          </VictoryChart>
          <VictoryChart>
            <VictoryBar
              style={{ data: { fill: "#87CEEB" } }}
              barWidth={15}
              horizontal
              width={width + 30}
              height={height / 5}
              labels={({ datum }) => `${datum._y}`}
              data={data}
              x="month"
              y="earnings"
            />
          </VictoryChart>
          <VictoryChart>
            <VictoryLine data={data} x="month" y="earnings" />
          </VictoryChart>
        </View>
        <View
          style={{ flexWrap: "wrap", flexDirection: "row", marginEnd: 900 }}
        >
          <Card
            style={{
              backgroundColor: "",

              paddingVertical: 45,
              paddingHorizontal: 25,

              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text>Overall Profit</Text>
          </Card>
          <Card
            style={{
              backgroundColor: "",

              paddingVertical: 45,
              paddingHorizontal: 40,

              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text>Overall Spend</Text>
          </Card>
        </View>
        <View
          style={{ flexWrap: "wrap", flexDirection: "row", marginEnd: 900 }}
        >
          <Card
            style={{
              backgroundColor: "red",

              paddingVertical: 45,
              paddingHorizontal: 65,

              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <AntDesign name="caretup" size={24} color="black" />
            <Text>62.54%</Text>
            <Text>Expenses</Text>
          </Card>
          <Card
            style={{
              backgroundColor: "blue",

              paddingVertical: 40,
              paddingHorizontal: 65,
              marginLeft: 2,

              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <AntDesign name="caretdown" size={24} color="black" />
            <Text>102500</Text>
            <Text>Revenue</Text>
          </Card>
        </View>

        <View>
          <Svg style={{ minHeight: 300 }}>
            <VictoryPie
              standalone={false}
              width={300}
              height={300}
              data={data}
              x="month"
              y="earnings"
              innerRadius={50}
              labelRadius={100}
              theme={VictoryTheme.material}
              style={{ labels: { fontSize: 20, fill: "black" } }}
            />
          </Svg>
        </View>
      </ScrollView>
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
    earnings: 300,
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
export default FinancialDashboard;
