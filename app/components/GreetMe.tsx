import React from "react";
import { StyleSheet, Text, View } from "react-native";

type propName = { name: string };
const GreetMe = (_name: propName) => {
  return (
    <View>
      <Text style={styles.text}>Hello, {_name.name}!</Text>
    </View>
  );
};

export default GreetMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
