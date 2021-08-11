import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Audio} from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import MeaningView from "./MeaningView"
import {theme} from "../../style/theme";

const DataView = ({wordInfo, search}) => {
    const [meaningInfos, setMeaningInfos] = useState([]);
    //console.log('wordInfo : ',wordInfo);

    useEffect(() => {
        setMeaningInfos(wordInfo.meanings);
    }, []);

    useEffect(() => {
        setMeaningInfos(wordInfo.meanings);
    }, [wordInfo]);

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
                    <Text style={styles.pronunciationText}>[{wordInfo.phonetics[0] ? wordInfo.phonetics[0].text : ''}]</Text>
                    <TouchableOpacity onPress={() =>
                        playSound(wordInfo.phonetics[0] ? wordInfo.phonetics[0].audio : '')
                    }>
                        <Icon style={styles.pronunciationIcon} name="caret-forward-circle-outline" size={25}/>
                    </TouchableOpacity>
                </View>
            </View>

            {wordInfo.meanings.map((meainingInfo, index) => (
                <MeaningView meainingInfo={meainingInfo} key={index} search={search}/>
            ))}
        </View>
    )
};


const styles = StyleSheet.create({

    textView: {
        flex: 1,
        borderBottomColor: theme.white,
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
        fontSize: 25,
        fontWeight: "bold",
        color: theme.white
    },

    pronunciationText: {
        fontSize: 20,
        color: theme.white
    },

    pronunciationIcon: {
        marginLeft: 6,
        color: theme.white

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
