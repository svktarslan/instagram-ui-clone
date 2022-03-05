import React from "react";
import { FlatList, View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const renderItem = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["grey", "grey"]}
          style={{
            width: 67,
            height: 67,
            borderRadius: 67,
            backgroundColor: "#6d747a",
            marginHorizontal: 10,
            marginVertical: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: 65,
              width: 65,
              height: 65,
              borderWidth: 4,
              borderColor: "black",
            }}
            source={{
              uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
            }}
          />
        </LinearGradient>
      </TouchableOpacity>
      <Text
        style={{ color: "white", textAlign: "center", alignSelf: "center" }}
      >
        svktarslan
      </Text>
    </View>
  );
};
export default () => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={(_, i) => String(i)}
      />
    </View>
  );
};
