import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import React,{useState, useEffect, createContext, useContext} from "react";
import styled from "styled-components/native";
import axios from "axios";
import DataView from "../components/detail/DataView";
import Footer from "../components/Footer";
import DetailSearchInput from "../components/detail/DetailSearchInput";
import {theme} from "../style/theme";
import IconButton from "../components/detail/IconButton";
import Common from "../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
  `;

const Detail = ({route, navigation}) => {
    const word = route.params.word;
    const [wordInfos, setWordInfos] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [synonyms, setSynonyms] = useState('');
    const [hasResult, setHasResult] = useState(false);

    useEffect( ()  => {
        setSearchText(word);

        async function search(word){
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + word).catch(error => {
                Alert.alert(
                    "알림",
                    "검색 결과가 없습니다.",
                    [
                        { text: "확인" }
                    ],
                    { cancelable: false }
                );
                setHasResult(false);
            });
            if(data) {
                setHasResult(true);
                setWordInfos(data.data);
            }
        }

        search(word);

    }, []);

    useEffect( ()  => {

        if(synonyms) {
            setSearchText(synonyms);

            async function search(synonyms){
                const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + synonyms).catch(error => {
                    Alert.alert(
                        "알림",
                        "검색 결과가 없습니다.",
                        [
                            { text: "확인" }
                        ],
                        { cancelable: false }
                    );
                    setHasResult(false);
                });
                if(data) {
                    setHasResult(true);
                    setWordInfos(data.data);
                }
            }

            search(synonyms);
        }

    }, [synonyms]);

    const searchSynonyms = (text) => {
        setSynonyms(text);
    }

    const saveWord = async () => {

        const saveData = {
            id: Common.getCurrentMilleSeconds(),
            text: searchText,
            data: wordInfos
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

    return (
        <Container>
            <View style={styles.wordContainer}>
                <View style={styles.topContainer}>
                    <DetailSearchInput
                        placeholder="검색어 입력"
                        value={searchText}
                        onSubmitEditing={async ()=> {
                            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + searchText).catch(error => {
                                Alert.alert(
                                    "알림",
                                    "검색 결과가 없습니다.",
                                    [
                                        { text: "확인" }
                                    ],
                                    { cancelable: false }
                                );
                                setHasResult(false);
                            });
                            if(data) {
                                setHasResult(true);
                                setWordInfos(data.data);
                            }
                        }}
                        onChangeText={(text)=> {
                            setSearchText(text);
                        }}
                    />
                    { hasResult && <IconButton style={styles.saveIcon} name="checkmark" size={30} onPressOut={saveWord}/> }
                </View>
            </View>

            <View style={styles.dataContainer}>
                <ScrollView>
                {wordInfos.map((wordInfo, index)=> (
                    <DataView wordInfo={wordInfo} key={index} search={searchSynonyms}/>
                ))}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Footer/>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({

    wordContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5
    },

    dataContainer: {
        flex: 8,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
        marginTop: 15
    },

    topContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    footer:{
        flex:1,
        backgroundColor: '#eee'
    },

    titleText: {
        flex:1,
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.purple
    },

    saveIcon: {
        flex:1,
    }
});

export default Detail;
