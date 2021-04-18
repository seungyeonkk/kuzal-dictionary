import React, {useState} from "react";
import styled from "styled-components/native";
import SearchInput from '../components/SearchInput';
import {TouchableWithoutFeedback, Keyboard} from "react-native";
import HomeHeader from "../components/home/HomeHeader";


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
  `;

const ViewContent = styled.View`
    flex: 9;
    align-items: center;
    justify-content: flex-start;
    padding: 20px
  `;

const InputView = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.white};
  `;

const Home = ({ navigation }) => {

    const [word, setWord] = useState('');

    const handleTextChange = text => {
        setWord(text);
    }

    const movePage = () => {
        navigation.navigate('Detail', {word: word});
    }

    const moveNotePage = () => {
        navigation.navigate('Note');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <HomeHeader onPress={moveNotePage}/>
                <ViewContent>
                    <InputView>
                        <SearchInput
                            placeholder="Search"
                            value={word}
                            onSubmitEditing={movePage}
                            onChangeText={handleTextChange}
                        />
                    </InputView>
                </ViewContent>
            </Container>
        </TouchableWithoutFeedback>
    );
}

export default Home;
