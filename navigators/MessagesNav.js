import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";

const Stack = createNativeStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
