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
    <View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.card}>
            <Card
              style={{
                border: "2px solid black",
                width: "15%",
                height: "100%",
              }}
            >
              <View
                style={{
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                  }}
                >
                  64.52%
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    alignItems: "center",
                  }}
                >
                  Overall Profit Margin
                </Text>
              </View>
            </Card>
            <Card
              style={{
                border: "2px solid black",
                marginRight: 200,
                width: "17%",
                height: "100%",
              }}
            >
              <View
                style={{
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                  }}
                >
                  $102,500
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    alignItems: "center",
                  }}
                >
                  Overall Outstanding Revenue
                </Text>
              </View>
            </Card>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              height: "15%",
              //  border:"2px solid black",
              flexDirection: "row",
            }}
          >
            <Card
              style={{
                backgroundColor: "red",
                border: "2px solid black",
                width: "20%",
                height: "100%",
                marginLeft: 0,
              }}
            >
              <View
                style={{
                  marginTop: 75,
                  alignItems: "center",
                }}
              >
                <View>
                  <AntDesign name="caretdown" size={24} color="white" />

                  <Text
                    style={{
                      color: "white",
                      fontSize: 30,
                      fontStyle: "italic",
                    }}
                  >
                    -57.39%
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    alignItems: "center",
                    fontStyle: "italic",
                  }}
                >
                  Expenses
                </Text>
              </View>
            </Card>
            <Card
              style={{
                backgroundColor: "blue",
                // border:"2px solid black",
                marginLeft: 2,
                width: "20%",
                height: "100%",
                // justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 75,
                  alignItems: "center",
                }}
              >
                <View>
                  <AntDesign name="caretdown" size={24} color="white" />

                  <Text
                    style={{
                      color: "white",
                      fontSize: 30,

                      fontStyle: "italic",
                    }}
                  >
                    -39.80%
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    alignItems: "center",
                    fontStyle: "italic",
                    // justifyContent: "center",
                  }}
                >
                  Revenue
                </Text>
              </View>
            </Card>
            <Card
              style={{
                flex: 1,
                // backgroundColor: "red",
                minWidth: "50%",
                marginTop: "-12%",

                marginHorizontal: "1%",

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

          <View style={{ flexDirection: "row" }}>
            <Card
              style={{
                //  backgroundColor: "red",
                minWidth: "48%",
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
                minWidth: "50%",
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

          <View
            style={{
              marginLeft: 500,
              marginRight: 500,
              backgroundColor: "",
              minHeight: 100,
            }}
          >
            <VictoryChart>
              <VictoryLegend
                x={125}
                y={0}
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ title: { fontSize: 20 } }}
                data={[
                  { name: "One", symbol: { fill: "#00FFFF", type: "square" } },
                  { name: "Two", symbol: { fill: "#00FF7F", type: "square" } },
                  {
                    name: "Three",
                    symbol: { fill: "#8A2BE2", type: "square" },
                  },
                ]}
              />
              <VictoryAxis />
              <VictoryAxis dependentAxis />

              <VictoryAxis
                dependentAxis
                key={2}
                orientation="right"
                style={{
                  axis: { stroke: "red" },
                  ticks: { padding: 0 },
                  tickLabels: { fill: "red", textAnchor: "this" },
                }}
                tickValues={[50, 150, 250, 300]}
              />
              <VictoryGroup>
                <VictoryBar
                  style={{ data: { fill: "#00FFFF" } }}
                  domain={{ x: [1, 6] }}
                  barWidth={15}
                  labels={({ datum }) => `${datum._y}`}
                  data={date.actual}
                />
                <VictoryBar
                  style={{ data: { fill: "#00FF7F" } }}
                  domain={{ x: [1, 6] }}
                  barWidth={15}
                  labels={({ datum }) => `${datum._y}`}
                  data={date.planned}
                />
                <VictoryLine
                  style={{ data: { stroke: "blue", strokeWidth: 2 } }}
                  domain={{ x: [1, 6] }}
                  data={date.planned}
                />
                <VictoryScatter data={date.planned} />
              </VictoryGroup>
            </VictoryChart>
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
  // 555555555555555555
  card: {
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 0,
    // backgroundColor: "",
    // width: "45%",
    height: "10%",
    // border:"2px solid black",
    flexDirection: "row",
  },

  // 5555555555555555
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
