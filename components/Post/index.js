import React from "react";
import { View } from "react-native";
import PostCard from "./PostCard";

export default function Post() {
  return (
    <View>
      {[0, 1].map((i) => (
        <PostCard key={i} item={i} />
      ))}
    </View>
  );
}
