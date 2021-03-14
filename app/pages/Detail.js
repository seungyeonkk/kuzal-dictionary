import {Text} from "react-native";
import React from "react";
import styled from "styled-components/native";
import axios from "axios";


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background}; 
    align-items: center;
    justify-content: flex-start;
  `;

const search = async ( word ) => {
    const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + word);
    console.log(data);
}

const Detail = ({ route }) => {

    const word = route.params.word;

    return (
        <Container>
            <Text>검색 결과 화면</Text>
        </Container>
    );
}

export default Detail;
