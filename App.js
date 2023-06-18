import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
// import InputText from './components/textInput/InputWord';
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import InputWord from "./components/textInput/InputWord";

function App() {

  return (
    <View>
      <View style={styles.logo}>
        <Entypo name="open-book" size={34} color="black" />
        <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>
          LexiVerse
        </Text>
      </View>
      <View>
        <InputWord />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
});

export default App;
