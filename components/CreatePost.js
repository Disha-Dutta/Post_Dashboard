import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Icon from "./Icon";

export default function CreatePost() {
  return (
    <View style={styles.createPostContainer}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Image
            source={require("../assets/avatar.gif")}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Create a new post"
            style={{
              fontFamily: "poppins-medium",
              marginLeft: 20,
              fontSize: 16,
            }}
          />
        </View>
      </View>

      <View style={[styles.row, styles.iconsContainer]}>
        <Icon
          source={require("../assets/icons/photograph.png")}
          size={34}
          color="#707070"
        />
        <Icon
          source={require("../assets/icons/video-camera.png")}
          size={34}
          color="#707070"
        />
        <Icon
          source={require("../assets/icons/audio.png")}
          size={30}
          color="#707070"
        />
        <Icon
          source={require("../assets/icons/google-docs.png")}
          size={30}
          color="#707070"
        />
        <Icon
          source={require("../assets/icons/google-sheets.png")}
          size={30}
          color="#707070"
        />
      </View>
    </View>
  );
}

const spacing = 4;
const avatarSize = 40;
const styles = StyleSheet.create({
  createPostContainer: {
    backgroundColor: "#ebedf2",
    paddingVertical: 16,
    paddingHorizontal: spacing * 3,
    marginVertical: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 4,
    paddingHorizontal: 4,
  },
  inputContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});
