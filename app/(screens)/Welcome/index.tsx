import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { Image, StatusBar, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../../styles/welcome.styles";
import ComponentHome from "../../components/componentHome";

const images = [
  require("../../../assets/images/bg-home.jpg"),
  require("../../../assets/images/bg-home1.jpg"),
];

export default function Welcome() {
  const insets = useSafeAreaInsets();
  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
          <View style={styles.brandingContainer}>
            <Image
              source={require("../../../assets/images/main-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.brandingText}>
              FREE{"\n"}
              <Text style={styles.brandingTextHighlight}>LEX</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.content, { paddingBottom: insets.bottom + 24 }]}>
          <ComponentHome />
        </View>
      </View>
    </>
  );
}
