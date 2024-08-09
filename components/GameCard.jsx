import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: game.image }} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>Score: {game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
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
