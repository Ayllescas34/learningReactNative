import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated, Pressable } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { Score } from "./Score";

const StylledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
    <StylledPressable className="active:opasity-70 border border-black
    active:border-white/50 mb-2">
    <View className="flex-row  gap-4 mb-4" key={game.slug}>
        <Image source={{ uri: game.image }} style={styles.image} />
      <View className="flex-shrink">
        <Text className="mb-1" style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100}/>
        <Text className="mt-2" style={styles.description}>{game.description}</Text>
      </View>
    </View>
    </StylledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 50,
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
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
