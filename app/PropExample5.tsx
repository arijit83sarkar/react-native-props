import React from "react";
import { StyleSheet, View } from "react-native";
import DataList from "./components/DataList";
import { Item } from "./components/Item";

const PropExample5 = () => {
  const data: Item[] = [
    {
      id: 1,
      name: "Solar Lantern",
      description:
        "A compact, solar-powered lantern ideal for outdoor camping and emergency use.",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description:
        "Compact Bluetooth earbuds with noise cancellation and 8-hour battery life.",
    },
    {
      id: 3,
      name: "Travel Backpack",
      description:
        "Water-resistant backpack with multiple compartments and padded laptop sleeve.",
    },
    {
      id: 4,
      name: "Digital Alarm Clock",
      description:
        "LED display clock with customizable alarm tones and ambient light settings.",
    },
    {
      id: 5,
      name: "Foldable Yoga Mat",
      description:
        "Lightweight and foldable mat with anti-slip surface, great for yoga and Pilates.",
    },
  ];
  return (
    <View>
      <DataList items={data} />
    </View>
  );
};

export default PropExample5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f0f0f0",
  },
});
