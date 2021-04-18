import {StyleSheet, Text, View} from "react-native";
import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import axios from "axios";
import WordView from "../components/detail/WordView";
import DataView from "../components/detail/DataView";
import Footer from "../components/Footer";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
  
  `;

const Detail = ({route}) => {
    const word = route.params.word;
    const [wordInfo, setWordInfo] = useState('');

    useEffect(() => {
         async function search(word){
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + word);
            setWordInfo(data.data);
        }
        search(word);

    }, []);

    return (
        <Container>
            <View style={styles.wordContainer}>
                <WordView wordInfo={wordInfo}/>
            </View>
            <View style={styles.dataContainer}>
               <DataView wordInfo={wordInfo}/>
            </View>
            <View style={styles.footer}>
                <Footer/>
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

    footer:{
        flex:1,
        backgroundColor: '#eee'
    }
});

export default Detail;
