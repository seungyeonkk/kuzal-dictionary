import {StyleSheet, Text, View} from "react-native";
import React from "react";
import styled from "styled-components/native";
import axios from "axios";
import WordView from "../components/detail/WordView";
import DataView from "../components/detail/DataView";


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
  
  `;

const search = async (word) => {
    const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + word);
    console.log(data);
}

const Detail = ({route}) => {

    const word = route.params.word;

    return (
        <Container>
            <View style={styles.wordContainer}>
                <WordView/>
            </View>
            <View style={styles.dataContainer}>
               <DataView/>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({

    wordContainer: {
        flex: 1,
        backgroundColor: '#eee',
    },

    dataContainer: {
        flex: 6,
    },
});

export default Detail;
