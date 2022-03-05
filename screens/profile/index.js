import React from "react";
import { View, Text, ScrollView } from "react-native";
import Highlight from "./Highlight";
import Post from "./Post";
import Profile from "./Profile";
import Topbar from "./Topbar";
export default () => {
  return (
    <ScrollView>
      <Topbar />
      <Profile />
      <Highlight />
      <Post />
    </ScrollView>
  );
};
