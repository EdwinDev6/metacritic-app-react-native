import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();
  return (
    <Screen>
    <View>
      <Link asChild href="/" className="text-blue-400 text-xl mt-24">
        <Pressable>
          <AntDesign name="home" size={24} color="white" />
        </Pressable>
      </Link>
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Game title {id}
        </Text>
      </View>
    </View>
    </Screen>
  );
}
