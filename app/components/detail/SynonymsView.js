import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

const SynonymsView = ({synonymsInfo}) => {

    console.log("synonymsInfo : ", synonymsInfo)

    return(
        <Text onPress={() => Alert.alert("hahaha") }> {synonymsInfo}, </Text>
        )
};

const styles = StyleSheet.create({
})

export default SynonymsView
