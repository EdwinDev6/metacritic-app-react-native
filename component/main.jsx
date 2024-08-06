import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

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
      <StatusBar style="light" />
      <ScrollView>
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </ScrollView>
    </View>
  );
}
