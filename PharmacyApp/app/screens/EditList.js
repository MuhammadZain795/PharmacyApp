import React from 'react';
import {ImageBackground, Text, StyleSheet} from "react-native";
function EditList(props) {
    return (
    <ImageBackground
        style={styles.background}
        source={require("../assets/bgPic.jpg")}>
        <Text>
            Edit/Add/Delete of Medicines will be done here...
        </Text>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
background:{
    flex:1
}
})
export default EditList;