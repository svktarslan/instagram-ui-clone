import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useHistory } from "react-router-native";

export default ({ setFocused, focused }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {focused ? (
        <View
          style={{
            width: 70,
            height: 33,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setFocused(false)}
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="arrow-back" size={29} color="white" />
          </TouchableOpacity>
        </View>
      ) : null}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "90%",
          height: 33,
          paddingHorizontal: 8,
          backgroundColor: "#3b3b3b",
          borderRadius: 8,
        }}
        placeholder="Search"
        placeholderTextColor="grey"
      />
    </View>
  );
};
