import { View, Text, Image, StyleSheet } from "react-native";

export function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: game.image }} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
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
