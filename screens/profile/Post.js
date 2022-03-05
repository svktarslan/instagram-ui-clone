import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default () => {
  const [state, setState] = useState(true);
  return (
    <View>
      {/* Actions Button */}
      <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => setState(true)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: state ? 2 : 0,
            borderColor: "white",
          }}
        >
          <MaterialIcons
            name="apps"
            size={27}
            color={state ? "white" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setState(false)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: state ? 0 : 2,
            borderColor: "white",
          }}
        >
          <MaterialIcons
            name="person-pin"
            size={27}
            color={state ? "grey" : "white"}
          />
        </TouchableOpacity>
      </View>
      {/* posts */}
      {state ? (
        <View
          style={{
            width: "100%",
            height: 150,
            flexDirection: "row",
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
      ) : (
        <View
          style={{
            width: "100%",
            height: 150,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.8} style={{ flex: 1 }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/pjimage_271.jpg",
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
                uri: "https://www.mon-livret.fr/wp-content/uploads/2021/12/bored-ape-yacht-club-versus-cryptopunks-696x464.png",
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
                uri: "https://www.mon-livret.fr/wp-content/uploads/2022/01/Bored-Ape-Yacht-Club.png",
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
