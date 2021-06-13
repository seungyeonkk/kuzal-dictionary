import React, {useState} from "react";
import styled from "styled-components/native";
import SearchInput from '../components/SearchInput';
import {TouchableWithoutFeedback, Keyboard, Platform} from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import Constants from 'expo-constants';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    paddingTop: ${Platform.OS === 'android' ? 25 : 0};
  `;

const ViewContent = styled.View`
    flex: 9;
    align-items: center;
    justify-content: flex-start;
    padding: 20px
  `;

const VersionContent = styled.View`
    flex: 1;
    align-items: center;
  `;

const VersionText = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.purple};
  `;

const InputView = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.white};
  `;

const Home = ({ navigation }) => {

    const [word, setWord] = useState('');
    const appVersion = Constants.manifest.version;

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
                            placeholder="검색어 입력"
                            value={word}
                            onSubmitEditing={movePage}
                            onChangeText={handleTextChange}
                        />
                    </InputView>
                </ViewContent>
                <VersionContent>
                    <VersionText>v {appVersion} </VersionText>
                </VersionContent>
            </Container>
        </TouchableWithoutFeedback>
    );
}

export default Home;
