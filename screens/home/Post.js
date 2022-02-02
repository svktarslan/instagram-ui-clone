import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default () => {
  return (
    <View>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 46,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingLeft: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                marginRight: 10,
              }}
              source={{
                uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>
              svktarslan
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: "100%",
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="ellipsis-vertical-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* POST IMAGE */}
      <Image
        style={{
          width: "100%",
          height: 362,
        }}
        source={{
          uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
        }}
      />
      {/* INNER ACTION BUTTONS */}
    </View>
  );
};
