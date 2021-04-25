import {ScrollView, StyleSheet, Text, View} from "react-native";
import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import axios from "axios";
import DataView from "../components/detail/DataView";
import Footer from "../components/Footer";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background}; 
  
  `;

const Detail = ({route}) => {
    const word = route.params.word;
    const [wordInfos, setWordInfos] = useState([]);
    useEffect(() => {

         async function search(word){
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + word);
            setWordInfos(data.data);

        }
        search(word);

    }, []);

    return (
        <Container>
            <View style={styles.wordContainer}>
                <Text> {word} </Text>
            </View>
            <View style={styles.dataContainer}>
                <ScrollView>
                {wordInfos.map((wordInfo)=> (
                    <DataView wordInfo={wordInfo}/>
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
        flex: 1,
        backgroundColor: '#eee',
    },

    dataContainer: {
        flex: 8,
        backgroundColor: '#6ED4C8'
    },

    footer:{
        flex:1,
        backgroundColor: '#eee'
    }
});

export default Detail;
