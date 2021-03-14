import React from 'react';
import styled from "styled-components/native";
import {theme} from "../style/theme";

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: theme.white
})`
    width: 80%;
    height: 40px;
    border: 1px;
    border-color: ${({ theme }) => theme.white};
    font-size: 12px;
    padding-left: 15px;
    color: ${({ theme }) => theme.white};
`;

const SearchInput = ({ placeholder, value, onChangeText, onSubmitEditing }) => {

  return <StyledInput
      placeholder={placeholder}
      maxLength={30}
      autoCapitalize="none"
      returnKeyType="search"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
  />
};

export default SearchInput;
