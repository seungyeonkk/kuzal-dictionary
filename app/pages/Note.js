import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import {Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteList from "../components/note/NoteList";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
    align-items: center;
    justify-content: center;
  `;

const Note = ({ navigation }) => {

    const [words, setWords] = useState([]);

    useEffect(() => {
        async function getData(word){
            const savedWords = JSON.parse(await AsyncStorage.getItem('words'));
            setWords(savedWords);
        }
        getData();
    }, []);

    const moveDetail = (word) => {
        navigation.navigate('Detail', {word: word});
    }

    const removeWords = async (id) => {

        console.log("데이터 삭제...", id);

        try {

            const savedWords = JSON.parse(await AsyncStorage.getItem('words'));

            const removedWords = savedWords.filter(
                (item, index, callback) => index != callback.findIndex(t => t.id === id)
            );

            await AsyncStorage.setItem('words', JSON.stringify(removedWords));

            Alert.alert(
                "알림",
                "단어가 삭제 되었습니다.",
                [
                    { text: "확인" , onPress: () => setWords(removedWords)}
                ],
                { cancelable: false }
            );
        } catch(e) {
            console.log("error", e);
        }
    }

    return (
        <Container>
            <NoteList items={words} onPress={moveDetail} onRemove={removeWords}></NoteList>
        </Container>

    );
}

export default Note;
