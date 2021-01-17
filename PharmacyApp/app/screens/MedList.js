import React from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';

function MedList({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgPic.jpg")}>
            <View style={styles.view}>
            <Text>
                Medicine List will be displayed here...
            </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    view:{
        marginTop:40,
        marginLeft:20
    }
})
export default MedList;