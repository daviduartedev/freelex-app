import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View } from "react-native";
import AppHeader from "../../components/header";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <AppHeader
        title="Explorar Turnos"
        leftAction={{
          icon: <Ionicons name="search" size={20} color="#111827" />,
          onPress: () => {},
        }}
        rightActions={[
          {
            icon: <Ionicons name="options-outline" size={20} color="#111827" />,
            onPress: () => {},
          },
        ]}
      />

      <View style={{ flex: 1 }} />
    </View>
  );
}
