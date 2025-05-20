import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { User } from "./components/User";
import UserCard from "./components/UserCard";

const PropExample2 = () => {
  const firstUser: User = {
    name: "David",
    age: 25,
    isPro: false,
    favoriteColors: ["Blue", "Green"],
  };
  const secondUser: User = {
    name: "Eve",
    age: 32,
    isPro: false,
    favoriteColors: ["Red", "Black", "White"],
  };

  const onButtonPress = (userName: any) => {
    Alert.alert(`Viewing profile for ${userName}`);
  };

  return (
    <View style={styles.container}>
      <UserCard
        user={firstUser}
        onButtonPress={() => onButtonPress(firstUser.name)}
        cardStyle={{ borderColor: "gold", borderWidth: 2 }}
      />
      <UserCard
        user={secondUser}
        onButtonPress={() => onButtonPress(secondUser.name)}
        cardStyle={undefined}
      />
    </View>
  );
};

export default PropExample2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
