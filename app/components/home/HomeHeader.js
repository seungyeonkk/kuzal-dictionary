import React from 'react';
import styled from "styled-components/native";
import {Text, Button} from "react-native";
import {theme} from "../../style/theme";

const HeaderView = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-left: 20px;
    padding-right: 20px;
  
`;

const HomeHeader = ({ onPress }) => {

    return <HeaderView>
            <Button title="Note" color={theme.purple} onPress={onPress} />
        </HeaderView>
    };

export default HomeHeader;
