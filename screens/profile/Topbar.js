import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
export default () => {
  return (
    <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            height: "65%",
            width: "65%",
            alignItems: "center",
            paddingLeft: 5,
            flexDirection: "row",
          }}
        >
          <EvilIcons name="lock" size={20} color="white" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              alignSelf: "flex-start",
              paddingTop: 2,
              paddingRight: 3,
            }}
          >
            svktarslan
          </Text>
          <AntDesign name="down" size={17} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            marginRight: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="plus-square" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            marginRight: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
