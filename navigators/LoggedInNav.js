import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from "../screen/Feed";
import WriteFeeling from "../screen/WriteFeeling";
import SideBarNav from "./SideBarNav";
import { useNavigation } from "@react-navigation/core";
// import UploadForm from "../screens/UploadForm";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen
        name='SideBar'
        component={ SideBarNav }
        options={ {
          title: "",
        } }
      />
    </Stack.Navigator>
  );
}