import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Audio} from 'expo-av';
import IconButton from "./IconButton";
import Common from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const saveWord = async () => {

        const saveData = {
            id: Common.getCurrentMilleSeconds(),
            text: wordInfo[0].word,
            data: wordInfo
        }

        try {
            const savedWords = JSON.parse(await AsyncStorage.getItem('words'));

            if(savedWords == null) {
                const words = [];
                words.push(saveData);
                await AsyncStorage.setItem('words', JSON.stringify(words));
            }else {

                savedWords.push(saveData);

                const removeDuplicatedWords = savedWords.filter(
                    (item, index, callback) => index === callback.findIndex(t => t.text === item.text)
                );

                await AsyncStorage.setItem('words', JSON.stringify(removeDuplicatedWords));
            }
            Alert.alert(
                "알림",
                "단어장에 저장했습니다. 열공 하세요~",
                [
                    { text: "확인" }
                ],
                { cancelable: false }
            );
        } catch(e) {
            console.log(error, e);
        }
    }

    return(
        <View style={styles.textView}>
            <View style={styles.wordView}>
                <Text style={styles.word}>{wordInfo[0]? wordInfo[0].word : ''}</Text>
                <IconButton name="checkmark" size={30} onPressOut={saveWord}></IconButton>
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
