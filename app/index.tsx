import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const _router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Example list for Props (Property)</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => _router.navigate("/GreetingExample")}
      >
        <Text>Example #1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => _router.navigate("/PropExample2")}
      >
        <Text>Example #2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => _router.navigate("/PropExample3")}
      >
        <Text>Example #3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => _router.navigate("/PropExample4")}
      >
        <Text>Example #4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => _router.navigate("/PropExample5")}
      >
        <Text>Example #5</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 4,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
