import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View className="bg-slate-500/10 flex-row gap-4 p-4 mb-10 rounded-xl">
      <Image style={styles.image} source={{ uri: game.image }} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Score score={game.score} maxScore={100} />
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {game.description.slice(0, 100)} ...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "justify",
  },
  score: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
