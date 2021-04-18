import React from "react";
import styled from "styled-components/native";
import {Button, Text, FlatList} from "react-native";
import {theme} from "../style/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteList from "../components/note/NoteList";


const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
    align-items: center;
    justify-content: center;
  `;

const Note = () => {

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('test', value)
            console.log("success")
        } catch (e) {
            console.log(e);
        }
    }

    const saveData = () => {
        storeData('This is test');
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('test')
            if(value !== null) {
                // value previously stored
                 console.log("확인 ==>", value);
            }
        } catch(e) {
            console.log(e);
        }
    }


    return (
        <Container>
            <NoteList items={[ { key: 'Devin' },
                { key: 'Dan' },
                { key: 'Dominic' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' },]}></NoteList>
        </Container>
    );
}

export default Note;
