import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";

const delay = (duration) =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
export default () => {
  const [disable, setDisable] = useState(false);
  async function press() {
    setDisable(true);
    await delay(3000);
    setDisable(null);
    await delay(2000);
    setDisable(false);
  }
  const ref = useRef(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            if (ref?.current?.isActive()) {
              ref?.current?.scrollTo(0);
            } else {
              ref?.current?.scrollTo(-200);
            }
          }}
          style={{
            width: 200,
            height: 100,
            borderRadius: 9,
            backgroundColor: "orange",
          }}
        ></TouchableOpacity>
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: "darkred" }}></View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};
