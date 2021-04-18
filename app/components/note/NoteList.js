import React from 'react';
import styled from "styled-components/native";
import {TouchableHighlight} from "react-native";
import IconButton from "../detail/IconButton";

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

const NoteList = ({ items, onPress, onRemove }) => {

    const renderItem = (item, index, separators) => {

        return <TouchableHighlight
            key={item.text}
            onPress={() => onPress(item.text)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <ItemView>
                <ItemText>{item.text}</ItemText>
                <ItemIcon>
                    <IconButton name="trash-outline" size={25} onPressOut={() => {
                        onRemove(item.id)
                    }}/>
                </ItemIcon>
            </ItemView>
        </TouchableHighlight>
    }

    return (
       <StyledFlatList data={items} renderItem={({ item, index, separators }) => renderItem(item, index, separators)}/>
    )
};

export default NoteList;
