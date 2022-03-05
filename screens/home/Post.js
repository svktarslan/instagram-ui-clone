import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

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
      <View style={{ width: "100%", height: 45, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row", paddingLeft: 10 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: "100%",
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: "100%",
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="message-circle" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: "100%",
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: "100%",
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="bookmark" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* likes and yorum */}
      <View style={{ width: "100%" }}>
        <View style={{ width: "100%", paddingLeft: 15 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              2.945 Likes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 3 }}>
            <Text style={{ fontWeight: "400", color: "grey" }}>
              View all 50 comments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Add a comment... */}
      <View
        style={{
          width: "100%",
          height: 40,
          flexDirection: "row",
          paddingLeft: 10,
          marginTop: 8,
        }}
      >
        <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 }}>
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
        <TextInput
          style={{ flex: 1, height: "80%", paddingHorizontal: 10 }}
          placeholder="Add a comment..."
          placeholderTextColor="grey"
        />
        <View
          style={{
            width: 80,
            height: 30,
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="heart" size={15} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>🙌</Text>
            {/* <Feather name="heart" size={24} color="red" /> */}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "400",
          color: "grey",
          fontSize: 13,
          paddingHorizontal: 10,
        }}
      >
        15 minutes ago
      </Text>
    </View>
  );
};
