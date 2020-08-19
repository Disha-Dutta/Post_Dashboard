import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import Icon from "../Icon";

const { width, height } = Dimensions.get("window");

export default function PostCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Image
            source={require("../../assets/avatar.gif")}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>
            {item == 0 ? "Sayantan Chandra" : "Priya Dutta"}
          </Text>
          <Text style={styles.lastSeen}>1 hour ago</Text>
        </View>
      </View>

      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.postImage}
      />

      <View style={styles.captionContainer}>
        <Text style={styles.description}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem {"\n"}ipsum has been the industry's standard {"\n"}
          dummy text ever since...
          <Text style={styles.innerText}>Continue reading</Text>
        </Text>
      </View>

      <View style={[styles.row, styles.iconsContainer]}>
        <Icon
          source={require("../../assets/icons/heart.png")}
          color={"#E31B23"}
          size={32}
        />
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#E31B23",
            marginRight: 6,
            marginLeft: 4,
          }}
        >
          1
        </Text>

        <Icon
          source={require("../../assets/icons/comment.png")}
          color="#aaa"
          size={28}
        />
        <Text style={styles.count}>0</Text>

        <View style={{ flexGrow: 1 }} />

        <Icon
          source={require("../../assets/icons/eye.png")}
          color="#aaa"
          size={32}
        />
        <Text style={styles.count}>Views (10)</Text>
      </View>
    </View>
  );
}

const spacing = 4;
const avatarSize = 40;
const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing,
    paddingTop: 10,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
    marginHorizontal: 6,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  userInfoContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
  userName: {
    fontSize: 18,
    fontFamily: "poppins-medium",
    marginBottom: -4,
    color: "#0890D4",
  },
  lastSeen: {
    fontSize: 14,
    color: "#aaa",
    fontFamily: "poppins-medium",
  },
  description: {
    fontSize: 14,
    color: "#7B7C7C",
    fontFamily: "poppins-medium",
    padding: 10,
  },
  innerText: {
    fontSize: 14,
    color: "#E31B23",
    fontFamily: "poppins-medium",
  },
  postImage: {
    width: "100%",
    height: 200,
    marginTop: 8,
  },

  captionContainer: {
    padding: spacing,
  },

  iconsContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 4,
  },

  count: {
    marginRight: spacing,
    color: "#aaa",
    fontFamily: "poppins-medium",
    marginLeft: 4,
  },
});
