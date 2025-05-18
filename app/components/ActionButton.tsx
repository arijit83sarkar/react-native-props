import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ActionButton = (props: any) => {
  const { title, onButtonPress, buttonColor } = props;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor || "#007bff" }]} // Default color
      onPress={onButtonPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
