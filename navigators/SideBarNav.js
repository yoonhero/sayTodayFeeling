import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import Feed from "../screen/Feed";
import WriteFeeling from "../screen/WriteFeeling";
import { TouchableOpacity, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/core";
// import UploadForm from "../screens/UploadForm";

const Drawer = createDrawerNavigator()

export default function SideBarNav() {
  const navigation = useNavigation()

  useEffect(() => {
    console.log(navigation, "hi")
    navigation.setOptions({
      headerLeft: () => (
        <View style={ { marginLeft: 10 } }>
          <TouchableOpacity onPress={ () => navigation.dispatch(DrawerActions.openDrawer()) }>
            <Ionicons name="ellipsis-vertical" size={ 25 } />
          </TouchableOpacity>
        </View>


      ),
      headerRight: () => (
        <View style={ { marginRight: 10 } }>
          <TouchableOpacity onPress={ () => navigation.dispatch(DrawerActions.openDrawer()) }>
            <Ionicons name="cog-sharp" size={ 25 } />
          </TouchableOpacity>
        </View>


      )
    })
  }, [])
  return (
    <Drawer.Navigator initialRouteName="Feed">

      <Drawer.Screen
        name='Feed'
        navigationOptions={ {
          drawerIcon: ({ tintColor }) => (
            <Ionicons color={ tintColor } name="albums" />
          )
        } }
        component={ Feed }
      />
      <Drawer.Screen
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
    </Drawer.Navigator>
  );
}