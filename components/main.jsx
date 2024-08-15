import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
        <Logo />
      </View>
      <Link asChild href="/about" className="text-blue-400">
        <Pressable>
          <Entypo name="info-with-circle" size={24} color="white" />
        </Pressable>
      </Link>
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
