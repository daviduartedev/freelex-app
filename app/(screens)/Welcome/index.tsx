import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { styles } from "../../../styles/index.styles";
import ComponentHome from "../../components/componentHome";

const images = [
  require("../../../assets/images/bg-home.png"),
  require("../../../assets/images/bg-home1.png"),
  require("../../../assets/images/bg-home2.png"),
];

export default function Welcome() {
  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={randomImage}
            style={styles.bgImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "#FFFFFF"]}
            locations={[0.45, 1]}
            style={styles.gradientOverlay}
          />
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <ComponentHome />

        </View>
      </ScrollView>
    </>
  );
}
