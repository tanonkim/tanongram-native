import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function UploadNav({ navigation }) {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        style: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "black",
        tabBarIndicatorStyle: { backgroundColor: "black", top: 0 },
      }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerLeft: ({ tintColor }) => (
                <Ionicons
                  color={tintColor}
                  name="close"
                  size={28}
                  onPress={() => navigation.navigate("Tabs")}
                />
              ),
              headerStyle: {
                backgroundColor: "black",
                shadowOpacity: 0.3,
              },
            }}
          >
            <Stack.Screen
              name="Select"
              options={{ title: "Choose a photo" }}
              component={SelectPhoto}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
