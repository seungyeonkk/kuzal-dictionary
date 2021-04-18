import React from 'react';
import styled from "styled-components/native";
import {TouchableHighlight, Text, View, Button, FlatList} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {theme} from "../../style/theme";

const StyledFlatList = styled.FlatList`
    width: 100%;
  `;

const ItemView = styled.View`
    padding: 20px;
    flex-direction: row;
    align-items: center;
  `;

const ItemText = styled.Text`
     flex:9;
     color: ${({ theme }) => theme.white};
     font-size: 20px;
  `;
const ItemIcon = styled.Text`
     flex:1;
     text-align:right;
  `;

const NoteList = ({ items }) => {

    const renderItem = (item, index, separators) => {

        return <TouchableHighlight
            key={item.key}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <ItemView>
                <ItemText>{item.key}</ItemText>
                <ItemIcon>
                    <AntDesign name="right" size={24} color={theme.white}></AntDesign>
                </ItemIcon>
            </ItemView>
        </TouchableHighlight>
    }

    return <StyledFlatList
            data={items} renderItem={({ item, index, separators }) => renderItem(item, index, separators)}
        />
    };

export default NoteList;
