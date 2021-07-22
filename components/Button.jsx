import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default ()=>{
return(
    <TouchableOpacity
    style={styles.button}
    >
 <Text>Pseso anal</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    button:{
        borderBottomWidth:3,
        height:30
    }
})