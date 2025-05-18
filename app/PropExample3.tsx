import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Container from "./components/Container";

const PropExample3 = () => {
  return (
    <View>
      <Container style={{ backgroundColor: "#e0e0e0" }}>
        <Text>This text is inside the container.</Text>
        <Button title="Click Me" onPress={() => alert("Button clicked!")} />
      </Container>
      <Container>
        <Text>Another container with different content.</Text>
      </Container>
    </View>
  );
};

export default PropExample3;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
