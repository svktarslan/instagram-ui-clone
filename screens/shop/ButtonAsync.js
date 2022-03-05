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
export default ({ actions, title, description, icon }) => {
  console.log(actions.length);
  const w = Dimensions.get("screen").width * 0.7;
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: "33%",
          left: "10%",
          zIndex: 1000,
          width: "80%",
          minHeight: 250,
          backgroundColor: "white",
          borderRadius: 8,
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 20,
            paddingHorizontal: 45,
            paddingRight: 30,
          }}
        >
          <View style={{ width: "100%", height: 30 }}>
            <Text
              style={{ fontWeight: "bold", color: "#00255c", fontSize: 20 }}
            >
              {title}
            </Text>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: -35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon}
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Text
              style={{ fontWeight: "400", color: "#00255caf", fontSize: 14 }}
            >
              {description}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            maxHeight: 50,
            width: "100%",
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {actions.slice(0, 3).map((x, i) => (
            <TouchableOpacity
              key={i}
              onPress={x.onPress}
              style={{
                width:
                  actions.length === 1
                    ? w
                    : w / (actions.slice(0, 3).length / 0.9),
                height: 40,
                borderRadius: 8,
                borderWidth: x.type === "cancel" ? 1.5 : 0,
                borderColor: "#929292",
                backgroundColor:
                  typeof x.bgColor === "string"
                    ? x.bgColor
                    : x.type === "cancel"
                    ? "white"
                    : x.type === "error"
                    ? "#dd0000"
                    : x.type === "warning"
                    ? "#e99f00"
                    : "#008cff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: x.type === "cancel" ? "#535353" : "white" }}
              >
                {x.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* alert close  */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => console.log("close")}
        style={{
          zIndex: 999,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#3636369d",
        }}
      ></TouchableOpacity>
    </>
  );
};
