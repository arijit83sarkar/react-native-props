import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { User } from "./components/User";
import UserCard from "./components/UserCard";

const PropExample2 = () => {
  const user1: User = {
    name: "David",
    age: 25,
    isPro: false,
    favoriteColors: ["Blue", "Green"],
  };
  const user2: User = {
    name: "Eve",
    age: 32,
    isPro: false,
    favoriteColors: ["Red", "Black", "White"],
  };

  const handlePress = (userName: any) => {
    Alert.alert(`Viewing profile for ${userName}`);
  };

  return (
    <View style={styles.container}>
      <UserCard
        user={user1}
        onButtonPress={() => handlePress(user1.name)}
        cardStyle={{ borderColor: "gold", borderWidth: 2 }}
      />
      <UserCard
        user={user2}
        onButtonPress={() => handlePress(user2.name)}
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
