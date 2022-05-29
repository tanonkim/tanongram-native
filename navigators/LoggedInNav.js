import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} size={focused ? 24 : 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"search"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"camera"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"heart"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"person"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
