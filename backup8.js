import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  onPress,
} from "react-native";
import { Dimensions } from "react-native-web";
import { Card } from "react-native-paper";

import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
  VictoryLabel,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
  VictoryTooltip,
  VictoryLegend,
} from "victory-native";
import Svg, { Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { arrayOf } from "prop-types";
const { width, height } = Dimensions.get("screen");

const FinancialDashboard = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              <Card
                style={{
                  backgroundColor: "",
                  minWidth: 200,

                  paddingVertical: 45,
                  paddingHorizontal: 45,

                  marginVertical: 5,
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

                  marginVertical: 5,
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
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              <Card
                style={{
                  backgroundColor: "red",
                  border: "2px solid black",
                  // width: "20%",
                  //height: "100%",

                  paddingVertical: 45,
                  paddingHorizontal: 65,
                  marginHorizontal: 5,
                  marginVertical: 0,
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
                  //  minWidth: 200,

                  paddingVertical: 45,
                  paddingHorizontal: 65,
                  marginLeft: 2,

                  marginVertical: 0,

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
          </View>
          <Card
            style={{
              // flex: 1,

              flexWrap: "wrap",
              marginHorizontal: 5,
              marginVertical: 8,
              minWidth: 270,
              shadowColor: "black",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 3,
              borderRadius: 5,
            }}
          >
            <VictoryChart
              width={1000}
              height={400}
              padding={{
                left: 70,
                top: 40,
                bottom: 50,
                right: 50,
              }}
            >
              <VictoryGroup>
                <VictoryLine
                  style={{ data: { stroke: "orange", strokeWidth: 2 } }}
                  domain={{ x: [0, 7] }}
                  data={date.actual}
                />
                <VictoryLine
                  style={{ data: { stroke: "blue", strokeWidth: 2 } }}
                  domain={{ x: [0, 7] }}
                  data={date.planned}
                />
                <VictoryScatter
                  domain={{ x: [0, 7] }}
                  data={date.actual}
                  labels={({ datum }) => `${datum._y}`}
                  labelComponent={<VictoryTooltip />}
                />
                <VictoryScatter
                  domain={{ x: [0, 7] }}
                  data={date.planned}
                  labels={({ datum }) => `${datum._y}`}
                  labelComponent={<VictoryTooltip />}
                />
              </VictoryGroup>
            </VictoryChart>
          </Card>
        </View>
        <View
          style={{
            flexDirection: "row",
            // minWidth: 500,
          }}
        >
          <Card
            style={{
              //  backgroundColor: "red",

              marginTop: "1%",
              shadowColor: "black",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 3,
              borderRadius: 5,
            }}
          >
            <VictoryChart
              width={500}
              height={300}
              padding={{
                left: 70,
                top: 40,
                bottom: 50,
                right: 50,
              }}
            >
              <VictoryBar
                domain={{ x: [0, 7] }}
                style={{ data: { fill: "orange" } }}
                barWidth={20}
                // width={width + 30}
                // height={height / 5}
                labels={({ datum }) => `${datum._y}`}
                data={data}
                cornerRadius={4}
                x="month"
                y="earnings"
              />
            </VictoryChart>
          </Card>
          <Card
            style={{
              // backgroundColor: "red",
              //   minWidth: "50%",
              marginTop: "1%",
              marginLeft: 5,
              shadowColor: "black",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 3,
              borderRadius: 5,
            }}
          >
            <VictoryChart
              width={500}
              height={300}
              padding={{
                left: 70,
                top: 40,
                bottom: 50,
                right: 50,
              }}
            >
              <VictoryBar
                domain={{ x: [0, 7] }}
                style={{ data: { fill: "green" } }}
                barWidth={15}
                horizontal
                width={width + 30}
                height={height / 5}
                labels={({ datum }) => `${datum._y}`}
                data={data}
                cornerRadius={4}
                x="month"
                y="earnings"
              />
            </VictoryChart>
          </Card>
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
    // backgroundColor: "red",
  },
});

const data = [
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
    earnings: 540,
  },
];

const date = {
  planned: [
    { x: 2.5, y: 255 },
    { x: 3.5, y: 375 },
    { x: 4.5, y: 280 },
    { x: 5.5, y: 630 },
  ],
  actual: [
    { x: 2, y: 120 },
    { x: 3, y: 380 },
    { x: 4, y: 420 },
    { x: 5, y: 525 },
  ],
};

export default FinancialDashboard;
