import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {theme} from "../../style/theme";

const SynonymsView = ({synonymsInfo, search}) => {
    return(
        <View>
            {synonymsInfo.map((synonyms, index) => (
                <Text style={styles.synonymsText} key={index} onPress={ async () => {
                    search(synonyms);
                } }> {synonyms} </Text>
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
