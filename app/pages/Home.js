import React, {useState} from "react";
import styled from "styled-components/native";
import SearchInput from '../components/SearchInput';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background}; 
    align-items: center;
    justify-content: flex-start;
  `;

const Home = ({ navigation }) => {

    const [word, setWord] = useState('');

    const handleTextChange = text => {
        setWord(text);
    }

    const movePage = () => {
        navigation.navigate('Detail', {word: word});
    }

    return (
        <Container>
            <SearchInput
                placeholder="검색어를 입력하세요"
                value={word}
                onSubmitEditing={movePage}
                onChangeText={handleTextChange}
            />
        </Container>
    );
}

export default Home;
