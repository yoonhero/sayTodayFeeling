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

const Container = styled.View``;

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
    <Text>hi</Text>
  );

}