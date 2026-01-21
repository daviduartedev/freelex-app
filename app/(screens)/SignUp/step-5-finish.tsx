import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../../../styles/signUp.step5.styles";

export default function Step5Finish() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AppHeader
        title="Cadastro"
        leftAction={{
          icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
          onPress: () => router.back(),
        }}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrapper}>
          <Text style={styles.stepText}>Passo 5 de 5</Text>
          <Text style={styles.stepPercent}>100%</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.title}>Finalização</Text>
        <Text style={styles.subtitle}>
          Revise as informações e aceite os termos para concluir seu cadastro.
        </Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Ionicons name="person-outline" size={18} color="#2563EB" />
            <Text style={styles.summaryText}>Dados pessoais preenchidos</Text>
          </View>

          <View style={styles.summaryRow}>
            <Ionicons name="location-outline" size={18} color="#2563EB" />
            <Text style={styles.summaryText}>Endereço confirmado</Text>
          </View>

          <View style={styles.summaryRow}>
            <Ionicons name="briefcase-outline" size={18} color="#2563EB" />
            <Text style={styles.summaryText}>Especialidades selecionadas</Text>
          </View>

          <View style={styles.summaryRow}>
            <Ionicons name="document-text-outline" size={18} color="#2563EB" />
            <Text style={styles.summaryText}>Documentos enviados</Text>
          </View>
        </View>

        <View style={styles.termsBox}>
          <Text style={styles.termsText}>
            Ao concluir o cadastro, você concorda com nossos{" "}
            <Text style={styles.link}>Termos de Uso</Text> e{" "}
            <Text style={styles.link}>Política de Privacidade</Text>.
          </Text>
        </View>

        <Pressable onPress={() => router.replace("/(screens)/Login")} style={styles.finishButton}>
          <Text style={styles.finishText}>Concluir cadastro</Text>
        </Pressable>

      </ScrollView>
    </>
  );
}
