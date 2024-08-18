import { View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#000",
          headerTitle: "",
          headerLeft: () => <Logo />,
        }}
      />
    </View>
  );
}
