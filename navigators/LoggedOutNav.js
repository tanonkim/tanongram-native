import React from "react";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Login"
        options={{
          headerTintColor: "red",
        }}
        component={Login}
      />
      <Stack.Screen
        name="CreateAccount"
        options={{
          headerTintColor: "blue",
        }}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}
