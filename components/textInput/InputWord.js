import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const InputWord = () => {
  const [word, setWord] = useState("");
  const [itemSearch, setItemSearch] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((res) => {
        const meanings = res[0]?.meanings || [];
        setItemSearch(meanings);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Search Word"
          style={styles.textInput}
          onChangeText={(val) => setWord(val)}
          value={word}
        />
        <TouchableOpacity onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 50, paddingHorizontal: 40, margin: 7 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Definition:</Text>
      
    <FlatList
    data={itemSearch}
    keyExtractor={(item)=>item.partOfSpeech}
    renderItem={({item})=>(
      <View stye={{padding:10}}>
        <Text>{item.partOfSpeech}</Text>
        {
          item.definitions.map((definition)=>(
            <Text key={definition.definition}>{definition.definition}</Text>
          ))
        }
      </View>
    )}
    />
          
      </View>
    </View>
  );
};

// export default InputWord;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  textInput: {
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 9,
    flexWrap: "wrap",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});

export default InputWord;


// {itemSearch.map((meaning) => (
//   <View key={meaning.partOfSpeech} style={{ padding: 10 }}>
//   <Text style={{ fontSize: 22 }}>{meaning.partOfSpeech}</Text>
//   {meaning.definitions.map((definition) => (
//     <Text key={definition.definition}>{definition.definition}</Text>
//   ))}
// </View>
// ))}