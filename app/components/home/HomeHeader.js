import React from 'react';
import styled from "styled-components/native";
import {Text, Button} from "react-native";
import {theme} from "../../style/theme";
import IconButton from "../detail/IconButton";

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
            <IconButton name="document-text-outline" size={30} onPressOut={onPress}/>
        </HeaderView>
    };

export default HomeHeader;
