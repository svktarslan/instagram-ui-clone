import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
export default () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 40,
          borderRadius: 8,
          borderWidth: 0,
          backgroundColor: "#008cff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Bas...</Text>
      </TouchableOpacity>
    </View>
  );
};
