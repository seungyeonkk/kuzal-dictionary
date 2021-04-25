import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {theme} from "../../style/theme";



const SynonymsView = ({synonymsInfo}) => {
    console.log("동의어 ", synonymsInfo)

    return(
            <View onPress={() => console.log("동의어 클릭") }>
                {synonymsInfo.map((synonyms, index) => (
                    <Text style={styles.synonymsText} key={index}> {synonyms} </Text>
                ))}
            </View>
        )
};

const styles = StyleSheet.create({
    synonymsText: {
        color: theme.purple,
        fontSize: 16,
        padding: 3
    },
})

export default SynonymsView
