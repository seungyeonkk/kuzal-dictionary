import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Audio} from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import MeaningView from "./MeaningView"
import axios from "axios";

const DataView = ({wordInfo}) => {
    const [meaningInfos, setMeaningInfos] = useState([]);
    console.log('wordInfo : ',wordInfo);

    useEffect(() => {
        setMeaningInfos(wordInfo.meanings);
    }, []);

    async function playSound(mp3file) {
        console.log('sound: ', mp3file);

        if (mp3file) {
            const sound = new Audio.Sound();
            try {
                await sound.unloadAsync();
                await sound.loadAsync({uri: mp3file});
                await sound.playAsync();
                //
            } catch (error) {
                log.error('error : ', error);
            }

        }
    }
    return (
        <View>
            <View style={styles.textView}>
                <View style={styles.wordView}>
                    <Text style={styles.word}>{wordInfo ? wordInfo.word : ''}</Text>
                </View>
                <View style={styles.pronunciationView}>
                    <Text>[{wordInfo ? wordInfo.phonetics[0].text.replace(/\//gi, "") : ''}]</Text>
                    <TouchableOpacity onPress={() =>
                        playSound(wordInfo ? wordInfo.phonetics[0].audio : '')
                    }>
                        <Icon style={styles.pronunciationIcon} name="caret-forward-circle-outline" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>

            {meaningInfos.map((meainingInfo) => (
                <MeaningView meainingInfo={meainingInfo}/>
            ))}
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

    pronunciationIcon: {
        marginLeft: 2
    },
    dataView: {
        flex: 6,
        backgroundColor: '#6ED4C8'
    },

    wordClassView: {
        backgroundColor: '#eee',

    }

});

export default DataView
