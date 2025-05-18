import React from "react";
import { StyleSheet, View } from "react-native";
import GreetingText from "./components/GreetMe";

const Example_1 = () => {
  return (
    <View style={styles.container}>
      <GreetingText name="Alice" />
    </View>
  );
};

export default Example_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
