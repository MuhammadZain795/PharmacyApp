import React from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';
function Home({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgPic.jpg")}>
            <Button onPress={() => navigation.navigate('Medicine List')} title="Go to Medicine List"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    }
})

export default Home;