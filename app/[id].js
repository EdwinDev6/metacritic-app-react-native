import { Text, View, Pressable} from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function detail() {
  return (
    <View className=" flex-1 justify-center items-center">
       <Link asChild href="/" className="text-blue-400 text-xl mt-24">
          <Pressable>
            <AntDesign name="home" size={24} color="white" />
          </Pressable>
        </Link>
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">Game title</Text>
       
      </View>
    </View>
  );
}
