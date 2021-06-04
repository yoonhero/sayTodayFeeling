import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screen/Feed";
import WriteFeeling from "../screen/WriteFeeling";
// import UploadForm from "../screens/UploadForm";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen
        name='Feed'
        options={ {
          headerBackTitleVisible: false,
          headerRight: ({ tintColor }) => (
            <Ionicons color={ tintColor } name="md-cog-outline" size={ 30 } />
          ),
          headerTintColor: "rgba(0,0,0,0.5)",
        } }
        component={ Feed }
      />
      <Stack.Screen
        name='Write'
        options={ {
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={ tintColor } name='close' size={ 28 } />
          ),
          title: "Write",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
        } }
        component={ WriteFeeling }
      />
    </Stack.Navigator>
  );
}