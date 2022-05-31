import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useMe from "../hooks/useMe";
import Upload from "../screens/Upload";
import TabsNav from "./TabsNav";

const Stack = createNativeStackNavigator();

export default function LoggedInNav() {
  const { data } = useMe();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
}
