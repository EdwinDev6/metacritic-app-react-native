import { Text, View, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "Game Details",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
         <ScrollView>
          <Text className="text-white font-bold mb-8 text-2xl">
            detalles del juego {id}
            </Text>
         </ScrollView>
        )}
      </View>
    </Screen>
  );
}
