import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ButtonAsync from "./ButtonAsync";
import CustomAlert from "./CustomAlert";

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
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CustomAlert
        icon={<AntDesign name="closecircle" color="red" size={70} />}
        title="Cikis Yap"
        description="Uygulamadan çıkış yapmak istediğinize eminmisiniz ? Çıkış
      yaparsanız tekrardan SMS kodu ile giriş yapmanız gerekir
      Uygulamayı kapatmak isterseniz telefonunuzun ana sayfa tuşunu
      kullanınız"
        actions={[
          {
            type: "success",
            title: "Success",
            onPress: () => console.log("success"),
          },
          {
            type: "error",
            title: "Error",
            onPress: () => console.log("error"),
          },
          {
            type: "cancel",
            title: "Cancel",
            onPress: () => console.log("cancel"),
          },
        ]}
      />
    </View>
  );
};
