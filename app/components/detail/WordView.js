import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av'

const WordView = ({wordInfo}) => {

    async function playSound(mp3file){
        console.log('sound: ', mp3file);

        if(mp3file){
            const sound = new Audio.Sound();
            try{
                await sound.unloadAsync();
                await sound.loadAsync({uri: mp3file});
                await sound.playAsync();
                //
            }catch(error){
                log.error('error : ',error);
            }

        }
    }

    return(
        <View style={styles.textView}>
            <View style={styles.wordView}>
                <Text style={styles.word}>{wordInfo[0]? wordInfo[0].word : ''}</Text>
                <Icon name="bookmark-outline" size={20}/>
            </View>
            <View style={styles.pronunciationView}>
                <Text>[{wordInfo[0] ? wordInfo[0].phonetics[0].text.replace(/\//gi,"") : ''}]</Text>
                <TouchableOpacity onPress={() =>
                    playSound(wordInfo[0] ? wordInfo[0].phonetics[0].audio : '')
                }>
                    <Icon style={styles.pronunciationIcon} name="caret-forward-circle-outline" size={20} />
                </TouchableOpacity>
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
