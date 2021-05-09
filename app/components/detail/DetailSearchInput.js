

import React from 'react';
import styled from "styled-components/native";
import {theme} from "../../style/theme";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";


const StyledSearchInput = styled.TextInput.attrs({
  placeholderTextColor: theme.white
})` 
    width:100%;
    height: 40px;
    font-size: 20px;
    padding-left: 15px;
    color: ${({ theme }) => theme.purple};
`;

const StyledView = styled.View`
  flex: 1;
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
      </StyledView>
  )
};

const styles = StyleSheet.create({

});

export default DetailSearchInput;
