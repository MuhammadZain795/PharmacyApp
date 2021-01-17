import React from 'react';
import { Button, ImageBackground, StyleSheet, Text } from 'react-native';
function Home({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgPic.jpg")}>
            <Text>This is Home Screen..</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    }
})

export default Home;