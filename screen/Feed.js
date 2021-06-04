import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  useWindowDimensions,
} from "react-native";
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  padding: 20px;
  min-height: 500px;
  max-height: ${props => props.height}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
  /* background-color: ${props => props.bg}; */
`;

const Line = styled.View`

width: ${props => props.width}%;
        height: 1px;
        background-color:rgba(0,0,0,0.5);
`


const TopLine = styled.View`
  width: 100%;
  padding: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    align-items: center;

`

const Date = styled.Text`
  margin: 0px 10px;
        font-weight: 600;
        font-size: 14px;
        color: rgba(0,0,0,0.5);
        /* color: #8e8e8e; */
`

const Content = styled.View`
width: 100%;
display: flex;

  padding: 10px;
`

const DiaryText = styled.Text`
font-weight: 400;
  font-size: 25px;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  line-height: 30px;
  padding: 0 10px;
  border: 0;
  background: transparent;
  font-family: NanumPenScript;
`






export default function Feed({ navigation }) {
  const [loading, setLoading] = useState(false)
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      title: "Yoonhero's diary",
    })

  }, [])

  let [fontsLoaded] = useFonts({
    'NanumPenScript': require('../assets/fonts/NanumPenScript-Regular.ttf'),
  });

  const data = [
    { id: 1, text: "오늘 하루도 이렇게 시작되었습니다. 시작은 많은 의미를 지니고 있습니다. 단지 출발이 아닌 그 사람의 의지와 용기도 알 수 있지요. 항상 앞으로 나아가려고 하고 노력하는 사람에게는 사소한 출발이 위대한 결과를 만들어낼 것 입니다." }, { id: 2, text: "hello friends what's up?" }, { id: 3, text: "hello friends what's up?" }, { id: 4, text: "hello friends what's up?" }, { id: 5, text: "hello friends what's up?" }, { id: 6, text: "hello friends what's up?" }, { id: 7, text: "hello friends what's up?" }, { id: 8, text: "hello friends what's up?" }
  ]
  const renderPhoto = ({ item: photo }) => {
    const randomNum = Math.floor(Math.random() * 100);
    return (
      <Container height={ height / 2 }>
        <TopLine>
          <Line width={ 80 }></Line>
          <Date >2021/5/18</Date>
          <Line width={ 20 }></Line>
        </TopLine>
        <Content>
          <DiaryText>{ photo.text }</DiaryText>
        </Content>
      </Container>
    )
  };

  return (
    <ScreenLayout loading={ !fontsLoaded }>
      <FlatList
        style={ { width: "100%" } }
        showsVerticalScrollIndicator={ false }
        data={ data }
        keyExtractor={ (photo) => "" + photo.id }
        renderItem={ renderPhoto }

      />
    </ScreenLayout>
  );

}