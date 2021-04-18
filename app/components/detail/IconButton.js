import React from 'react';
import styled from "styled-components/native";
import {theme} from "../../style/theme";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";




const IconButton = ({name, size, onPressOut}) => {

    return (
      <TouchableOpacity onPressOut={onPressOut}>
          <Icon name={name} size={size} color={theme.purple}/>
      </TouchableOpacity>
    );
}


export default IconButton;
