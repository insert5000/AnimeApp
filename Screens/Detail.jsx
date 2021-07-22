import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default () =>{


    return (
  
      <View style={styles.container}>
        <View style={styles.center}>
  
          <View style={styles.details}>
  
          
          </View>
  
          <View style={styles.textContent}>
            <Image style={styles.image}
            source={{uri:'https://i1.wp.com/www.mexmads.com/wp-content/uploads/2020/04/YPD3NNJ4OZFU5CLBPWHI5RVU3A.jpg?fit=980%2C528'}}
            
            />
              
            <View style={styles.text}>
              <Text>NARUTO                                        Score: 0.9</Text>
              <Text>Episodes: 605</Text>
              <Text>Sinopsis: Naurto es un cagon de pelo rubio que es mas cagon su hijo como lo odian los fan s de naruto gaaaaaaaaa</Text>
              
            </View>
          </View >
        </View>
      </View>
    );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(98, 57, 148, .95)',
      position: 'relative',
      justifyContent: 'center',
      padding: 30
    },
    center: {
      height: '85%',
      alignItems: 'center'
    },
    textContent: {
      width: 260,
      height: '105%',
      position: 'absolute',
  
  
  
    },
    details: {
      backgroundColor: 'white',
      height: '93%',
      width: 320,
      top: 85,
      borderRadius:15
  
    },
  
    image: {
      height: '50%',
      width: '100%',
      borderRadius:10
  
    },
    text:{
      flexDirection:'column',
      marginTop:10
    }
  
  
  
  })
  