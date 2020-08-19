import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default Icon = ({ source, color, size }) => {
  return (
    <View style={[styles.icon, { height: size, width: size }]}>
      <Image
        source={source}
        style={{ width: "100%", height: "100%", tintColor: color }}
      />
    </View>
  );
};

const avatarSize = 30;
const styles = StyleSheet.create({
  icon: {
    width: avatarSize,
    // height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
    padding: 6,
  },
});
