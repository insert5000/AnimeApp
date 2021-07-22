import { TouchableOpacity, Text, StyleSheet, Image, View, Animated, Button } from "react-native";
import React from "react";

export default ({ title, image, type, episodes }) => {
    //const fadeAnim = useRef(new Animated.Value(0)).current;
    return (
        <TouchableOpacity style={styles.container}>


            <Image
                style={styles.imageAnime}
                source={{
                    uri: image
                }}
            />
            <View
                style={styles.back}
            >

            </View>
            <View style={{ height:'40%', width: '100%', padding:5}}>
                <Text style={styles.text}>
                    {title}
                </Text>
               
                <Text style={styles.textEpic}>
                    Episodes: {episodes}
                </Text>
            </View>

        </TouchableOpacity>




    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 140,
        borderRadius: 25,
        marginBottom: 5,
        marginHorizontal: 8,

    },
    imageAnime: {
        height: '60%',
        width: '100%',
        borderRadius: 15,

    },
   

    text: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9  )',
        textTransform: "capitalize",

    },
    textType: {
        fontSize: 14,
        color: 'rgba(248, 246, 251, 0.5)',
        textTransform: "capitalize",

    },
    textEpic: {
        fontSize: 12,
        color: 'rgba(248, 246, 251, 0.5)',
        textTransform: "capitalize",
    },
    back: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,.08)',
        justifyContent: 'center',
        borderRadius: 15,

    }

})