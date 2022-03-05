import React from "react";
import { View, Text, ScrollView } from "react-native";
import History from "./History";
import Post from "./Post";
import TopBar from "./TopBar";
export default () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TopBar />
      <History />
      {[1, 2, 3, 4, 5].map((x, i) => (
        <Post key={i} />
      ))}
    </ScrollView>
  );
};
