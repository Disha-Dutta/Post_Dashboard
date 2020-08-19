import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CARDS } from "./Constant";
import StatisticCard from "./StatisticCard";

export default function Card() {
  return (
    <View style={styles.cardsContainer}>
      {CARDS.map((i) => (
        <StatisticCard
          key={i.label}
          item={i}
          backgroundColor={i.backgroundColor}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 12,
  },
});
