import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "./User";

type propCard = { user: User; onButtonPress: any; cardStyle: any };
const UserCard = (props: propCard) => {
  return (
    <View style={[styles.card, props.cardStyle]}>
      <Text style={styles.name}>{props.user.name}</Text>
      <Text>Age: {props.user.age}</Text>
      {props.user.isPro && <Text style={styles.proBadge}>Pro User</Text>}
      <Text>Favorite Colors: {props.user.favoriteColors.join(", ")}</Text>
      <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  proBadge: {
    color: "gold",
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
