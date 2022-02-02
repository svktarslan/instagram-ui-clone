import React from "react";
import { View, Text, Image } from "react-native";
import History from "./History";
import Post from "./Post";
import TopBar from "./TopBar";
export default () => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <History />
      <Post />
    </View>
  );
};
