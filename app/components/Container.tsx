import React from "react";
import { StyleSheet, View } from "react-native";

const Container = (props: any) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
  },
});
