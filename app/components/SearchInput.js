import React from 'react';
import styled from "styled-components/native";
import {theme} from "../style/theme";

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: theme.white
})`
    width: 90%;
    height: 40px;
    font-size: 20px;
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
