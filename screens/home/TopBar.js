import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 65,
        borderBottomWidth: 0.2,
        // borderColor: "#414141",
        paddingBottom: 5,
        paddingTop: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="stretch"
          style={{
            width: "70%",
            height: 40,
            borderRadius: 30,
            marginLeft: 13,
          }}
          source={{
            uri: "https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.actions}>
          <Feather name="plus-square" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <Feather name="heart" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <Feather name="send" size={23} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    width: 40,
    height: 40,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
