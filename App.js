import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import Icon from "./components/Icon";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Card from "./components/Cards";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === "Home") {
              icon = require("./assets/icons/compass.png");
            } else if (route.name === "Search") {
              icon = require("./assets/icons/search.png");
            } else if (route.name === "Message") {
              icon = require("./assets/icons/email.png");
            } else {
              icon = require("./assets/icons/user.png");
            }
            return <Icon source={icon} color={color} size={36} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#212121",
          inactiveTintColor: "#BDBDBD",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Other} />
        <Tab.Screen name="Message" component={Other} />
        <Tab.Screen name="Account" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
    fontFamily: "poppins-bold",
  },
  subtitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />

    <ScrollView>
      <Text style={styles.heading}>Activity</Text>
      <Card />
      <CreatePost />
      <Post />
    </ScrollView>
  </View>
);

const Other = () => (
  <View style={styles.subtitle}>
    <Text>This screen is not been implemented yet! :)</Text>
  </View>
);
