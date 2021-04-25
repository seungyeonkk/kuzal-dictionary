

import React from 'react';
import styled from "styled-components/native";
import {theme} from "../../style/theme";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";


const StyledSearchInput = styled.TextInput.attrs({
  placeholderTextColor: theme.white
})`
    flex:9
    height: 40px;
    font-size: 20px;
    padding-left: 15px;
    color: ${({ theme }) => theme.white};
`;

const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.grey};
`;


const DetailSearchInput = ({ placeholder, value, onChangeText, onSubmitEditing }) => {

  return (
    <StyledView>
        <StyledSearchInput
            placeholder={placeholder}
            maxLength={30}
            autoCapitalize="none"
            returnKeyType="search"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
        <Icon style={styles.searchIcon} name="ios-search-outline" size={20} color={theme.white}></Icon>
    </StyledView>
  )
};

const styles = StyleSheet.create({

    searchIcon: {
        flex: 1
    }

});

export default DetailSearchInput;
