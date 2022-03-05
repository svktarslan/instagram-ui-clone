import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity } from "react-native";
import History from "../home/History";
import Highlight from "./Highlight";

export default () => {
  return (
    <View style={{ width: "100%", height: 230 }}>
      <View
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            width: 80,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              marginRight: 10,
            }}
            source={{
              uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>3</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>407</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>319</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "column", padding: 10 }}>
        <Text style={{ fontSize: 13, color: "white" }}>Sevket ARSLAN</Text>
        <Text style={{ fontSize: 13, color: "white" }}>
          sfunc Sirketinde Yazilim Muhendisi
        </Text>
        <Text style={{ fontSize: 13, color: "white" }}>
          Elektrik Elektronik Muhendisi
        </Text>
        <Text style={{ fontSize: 13, color: "white" }}>Izmir - Ankara</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 35,
          flexDirection: "row",
          paddingHorizontal: 15,
          marginBottom: 15,
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "98%",
              height: "100%",
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            maxWidth: 35,
            borderWidth: 1,
            borderColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Ionicons name="person-add-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
