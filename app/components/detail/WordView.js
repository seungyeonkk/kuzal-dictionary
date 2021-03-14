import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {StyleSheet, Text, View} from 'react-native';

const WordView = () => {

    return(
        <View style={styles.textView}>
            <View style={styles.wordView}>
                <Text style={styles.word}>HELLO</Text>
                <Icon name="bookmark-outline" size={20}/>
            </View>
            <View style={styles.pronunciationView}>
                <Text>pronunciation</Text>
                <Icon style={styles.pronunciationIcon} name="caret-forward-circle-outline" size={20}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    textView: {
        flex: 1,
        backgroundColor: '#eee',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    wordView: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    pronunciationView: {
        flex: 1,
        margin: 10,
        flexDirection: 'row'
    },

    word: {
        fontSize: 20,
        fontWeight: "bold"
    },

    pronunciationIcon:{
        marginLeft: 2
    }
});


export default WordView;
