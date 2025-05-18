import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import ActionButton from "./components/ActionButton";

const PropExample4 = () => {
  const handleLogin = () => {
    Alert.alert("Login button pressed!");
  };

  const handleSignUp = () => {
    Alert.alert("Sign Up button pressed!");
  };
  return (
    <View style={styles.container}>
      <ActionButton
        title="Login"
        onButtonPress={handleLogin}
        buttonColor="green"
      />
      <ActionButton title="Sign Up" onButtonPress={handleSignUp} />
      <ActionButton
        title="Cancel"
        onButtonPress={() => Alert.alert("Cancel pressed!")}
        buttonColor="orange"
      />
    </View>
  );
};

export default PropExample4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
