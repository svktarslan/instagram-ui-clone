import React, { useEffect, useImperativeHandle } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
const { height } = Dimensions.get("window");
export default React.forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const scrollTo = (x) => {
    active.value = x !== 0;
    translateY.value = withSpring(x);
  };
  const isActive = () => {
    return active.value;
  };
  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => (context.value = { y: translateY.value }))
    .onUpdate((x) => {
      translateY.value = x.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -height + 50);
    })
    .onEnd(() => {
      if (translateY.value > -height / 3) {
        active.value = false;
        translateY.value = withSpring(0, { damping: 50 });
      } else if (translateY.value < -height / 2) {
        translateY.value = withSpring(-height + 50);
      }
    });
  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-height + 100, -height + 50],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  //   useEffect(() => {
  //     translateY.value = withSpring(-height / 3);
  //   }, []);
  return (
    <GestureDetector gesture={gesture}>
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (active.value) {
              active.value = false;
              scrollTo(0);
            } else {
              active.value = true;
              scrollTo(-200);
            }
          }}
          style={{ flex: 1, backgroundColor: "#00000090" }}
        ></TouchableOpacity>
        <Animated.View
          style={[
            {
              height: height - 50,
              width: "100%",
              backgroundColor: "white",
              position: "absolute",
              top: height,
              bottom: 0,
            },
            rBottomSheetStyle,
          ]}
        >
          {/* Line */}
          <View
            style={{
              width: 75,
              height: 4,
              backgroundColor: "grey",
              alignSelf: "center",
              marginVertical: 15,
              borderRadius: 2,
            }}
          />
          {children}
        </Animated.View>
      </View>
    </GestureDetector>
  );
});
