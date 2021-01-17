import React from 'react';
import { Text, ImageBackground, StyleSheet, Button } from 'react-native';

function MedList({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgPic.jpg")}>
            <Text>
                Medicine List will be displayed here...
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    }
})
export default MedList;