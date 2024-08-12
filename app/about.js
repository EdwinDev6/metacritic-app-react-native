import { Text, ScrollView, View } from "react-native";
import { Link } from "expo-router";
export default function About() {
  return (
    <ScrollView>
     <View className=" items-center text-justify">
     <Link href="/" className="text-blue-400 text-xl mt-24">
        Home
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        About the project
      </Text>

      <Text className="text-text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <Text className="text-text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
     </View>
    </ScrollView>
  );
}
