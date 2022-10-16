import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import TextInput from "react-native-input-validator";
export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [listResult, setListResult] = React.useState([]);
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(true);

  const onPressButton = () => {
    setResult((number1 / number2).toFixed(3));
    setListResult((preState) => [
      ...preState,
      `${number1}/${number2} = ${(number1 / number2).toFixed(3)}`,
    ]);
  };
  const handleError = (number) => {
    console.log(num);
    if (!validateNumber(number) || number == "") {
      setError1(true);
      setDisableButton(true);
      console.log("run");
      return;
    }
    setError1(false);
    setDisableButton(false);

  };
  const validateNumber = (number) => {
    var re = /^[0-9]*$/;
    return re.test(number);
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>MidTerm Test Thangnq30</Text>
        <View style={styles.caculator}>
          <View style={styles.param}>
            <View>
              <TextInput
                style={styles.number}
                onChangeText={onChangeNumber1}
                value={number1}
                keyboardType="numeric" // only show numberic keyboard so we cannot input string to input field
                onBlur={() => {
                  handleError(number1);
                }}
              />
              {error1 && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  Invalid value!
                </Text>
              )}
            </View>
            <Text style={{ fontSize: 24 }}>/</Text>
            <View>
              <TextInput
                style={styles.number}
                onChangeText={onChangeNumber2}
                selectionColor={"red"}
                value={number2}
                keyboardType="numeric"
                onBlur={() => {
                  handleError(number2);
                }}
              />
              {error2 && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  Invalid value!
                </Text>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            fontSize: 20,
            backgroundColor: "#39AC37",
            borderRadius: 8,
            margin: 5,
          }}
        >
          <Button
            color={"white"}
            onPress={onPressButton}
            disabled={disableButton || error1 || error2}
            title="="
          />
        </View>
        {result && (
          <View style={styles.result}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>{result}</Text>
          </View>
        )}

        {/* {result && <Separator />} */}
        <ScrollView>
          {listResult.map((e) => {
            return (
              <View style={styles.listResult}>
                <Text style={{ fontSize: 20 }}>{e}</Text>
                <Separator />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E8EAED",
    paddingHorizontal: 10,
  },
  header: {
    flex: 1,
    paddingTop: 50,
  },
  textHeader: {
    fontSize: 24,
    backgroundColor: "blue",
    color: "white",
    height: 60,
    paddingTop: 15,
    textAlign: "center",
  },
  caculator: {
    // backgroundColor: "green",
    // height: 30,
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  param: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  number: {
    // border: '1px solid black',
    width: 79,
    display: "flex",
    alignContent: "center",
    fontSize: 24,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  result: {
    // marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  listResult: {
    alignContent: "center",
    margin: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
