import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
function Home({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgPic.jpg")}>
            <Image 
            source={require('../assets/homeLogo.jpg')}
            style={styles.logo}>
            </Image>
            <View style={styles.View}>
                <Text style={styles.text}>24 Hour Sale:</Text>
                <Text style={styles.text}>100000 PKR</Text>
            </View>
            <View style={styles.View}>
                <Text style={styles.text}>Last Month Sale:</Text>
                <Text style={styles.text}>100000 PKR</Text>
            </View>
            {/* <View>
                <Button style={styles.button}>Update</Button>
            </View> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    logo:{
        marginTop:40,
        width:'50%',
        height:150
    },
    View:{
        marginTop:50,
        width:'50%',
        backgroundColor:"#000000"
    },
    text:{
        color:"white",
        fontWeight:'bold',
        fontSize:20
    }
    // button:{
    //     marginTop:40
    // }
})

export default Home;