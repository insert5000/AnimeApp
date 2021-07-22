import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList, StyleSheet, Button, ScrollView } from "react-native";
import { API } from "../utils/httpClient";
import Movies from "../Layouts/Movies"
import Tab from "../Navigation/TabNavigation"
import TopAnime from "../Layouts/TopAnime"


export default function App() {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(API + "/top/anime");
    const data = await response.json();
    const dataAnime = await data.top;
    setUsers(dataAnime);
    setloading(false);
    console.log(dataAnime)

  };

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <View style={styles.container}>
      
      <Text
        style={{ marginTop: 30, alignSelf: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', fontFamily: 'Roboto' }}
      >
        AnimePP
      </Text>
      <ScrollView style={{height:'100%', marginTop:10}}
      >
      <View style={styles.topContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Tab />
        )}
      </View>


      <View style={styles.topContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text
              style={{  fontSize: 15, color: 'white',marginLeft:20}}
            >
              TOP ANIME
            </Text>
            <TopAnime /></>
        )}
      </View>
      
      
      </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'rgba(98, 57, 148, .95)',


  },
  topContainer: {
    height: 270,

  },
  list: {
    alignSelf: "stretch",
    marginHorizontal: 15,

  }

});

