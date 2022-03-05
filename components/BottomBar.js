import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useHistory, useLocation } from "react-router-native";

export default () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <View
      style={{
        width: "100%",
        height: 40,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity onPress={() => history.push("/home")}>
        <Ionicons
          name={pathname === "/home" ? "home" : "home-outline"}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push("/search")}>
        <Ionicons
          name={pathname === "/search" ? "search" : "search-outline"}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push("/reels")}>
        <MaterialCommunityIcons
          name="television-play"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push("/shop")}>
        <MaterialCommunityIcons
          name={pathname === "/shop" ? "shopping" : "shopping-outline"}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: pathname === "/profile" ? 2 : 0,
          borderColor: "white",
          borderRadius: 30,
          width: 32,
          height: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => history.push("/profile")}
      >
        <Image
          style={{ width: 30, height: 30, borderRadius: 30 }}
          source={{
            uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
