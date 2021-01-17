import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from "react-native";
function EditList(props) {
    return (
    <ImageBackground
        style={styles.background}
        source={require("../assets/bgPic.jpg")}>
        <View style={styles.view}>
        <Text>
            Edit/Add/Delete of Medicines will be done here...
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
export default EditList;