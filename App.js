import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NativeRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-native";
import BottomBar from "./components/BottomBar";
import Home from "./screens/home/index";
import Search from "./screens/search/index";
import Reels from "./screens/reels/index";
import Shop from "./screens/shop/index";
import Profile from "./screens/profile/index";
import "react-native-gesture-handler";
function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/shop" />} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/reels" component={Reels} />
          <Route path="/shop" component={Shop} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </View>
      {/* <BottomBar /> */}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <NativeRouter>
        <App />
      </NativeRouter>
    </View>
  );
};
