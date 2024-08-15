import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import Entypo from "@expo/vector-icons/Entypo";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#000",
          headerTitle: "",
          headerLeft: () => ( <Logo /> ),
          headerRight: () => (
            <Link aschild href="/about">
              <Pressable>
              <Entypo name="info-with-circle" size={24} color="white" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}