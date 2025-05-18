import React from "react";
import { StyleSheet, View } from "react-native";
import GreetMe from "./components/GreetMe";

const GreetingExample = () => {
  return (
    <View style={styles.container}>
      <GreetMe name="Alice" />
      <GreetMe name="Bob" />
      <GreetMe name="Charlie" />
    </View>
  );
};

export default GreetingExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
