import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { names } from "./names";

//
const namesAsObjects = names.map((item) => {
  return { name: item};
 });
 
 //
 export default function App() {
  const renderName = ({ item }) => {
    return <Text style={[styles.textStyle]}>{item.name}</Text>;
  };
 
  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
 }


//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 18,
    color: 'white',
    margin: 10,
    padding: 10,
    width: 300,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'purple'
    
    
  }

 });




