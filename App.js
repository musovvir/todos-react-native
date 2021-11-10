import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Image,
  View,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

export default function App() {
  const handleButtonPress = () =>
    Alert.alert("isMusovvir?", "musovvir", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") }
    ]);
  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, { backgroundColor: "yellow" }]}></View>
      <View style={[styles.box, { backgroundColor: "red" }]}></View>
      <View style={[styles.box, { backgroundColor: "green" }]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  box: {
    width: 100,
    height: 100
  }
});
