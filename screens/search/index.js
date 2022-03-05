import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import SearchBar from "./SearchBar";
export default () => {
  const [focused, setFocused] = useState(false);
  console.log(focused);
  return (
    <ScrollView>
      <SearchBar focused={focused} setFocused={setFocused} />
      {/* <FlatList data={[1, 2, 3, 4, 5, 6]} /> */}

      {[1, 2, 3, 4, 5, 6].map((x, i) => (
        <View
          key={i}
          style={{
            width: "100%",
            height: 150,
            flexDirection: "row",
            marginBottom: 2,
          }}
        >
          <TouchableOpacity activeOpacity={0.8} style={{ flex: 1 }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://icdn.ensonhaber.com/resimler/diger/kok/2021/12/14/nft_386.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 1, marginLeft: 2 }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 1, marginLeft: 2 }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://images.ctfassets.net/a9237abdyvg9/39i2MxooigoF9iaYpekQJ6/956017a647a0471999ecf52deec35c07/Yuga-Labs-Bored-Ape-Yacht-Club-5812.jpeg",
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
