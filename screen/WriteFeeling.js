import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
`;

const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;


const ExtraContainer = styled.View`
  padding: 10px;
`;

export default function WriteFeeling({ navigation }) {

  return (
    <Container>
      <TouchableOpacity onPress={ () => { navigation.toggleDrawer() } } >
        <Text>toggle</Text>
      </TouchableOpacity>
    </Container>

  );

}