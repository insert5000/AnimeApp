import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import {API} from "../utils/httpClient";
export default function App() {
  const [loading, setloading] = useState(true);
  const [anime, setAnime] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(API+"/top/anime"); 
    const data = await response.json();
    const dataAnime = await data.top;
    setAnime(dataAnime);
    setloading(false);
    console.log(dataAnime)
    
  };
  
  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        < FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={anime}
          keyExtractor={(x) => x.mal_id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              image={item.image_url}
              episodes={item.episodes}
              />

          )}
        ></FlatList>

      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',


  },
  list: {
    alignSelf: "stretch",
    marginHorizontal:10,
    marginVertical:10
    
  }

});

