import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import {Button, Text, FlatList} from "react-native";
import {theme} from "../style/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteList from "../components/note/NoteList";
import axios from "axios";


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


    return (
        <Container>
            <NoteList items={words} onPress={moveDetail}></NoteList>
        </Container>
    );
}

export default Note;
