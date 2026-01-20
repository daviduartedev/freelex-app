import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import styles from "../../../styles/signUp.personal.styles";

export default function Step1Personal() {
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
          <Text style={styles.stepText}>Passo 1 de 5</Text>
          <Text style={styles.percent}>20%</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.subtitle}>
          Preencha seus dados básicos para começar.
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nome Completo</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Ex: João Silva"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>CPF</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="000.000.000-00"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Telefone</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="(00) 00000-0000"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/(screens)/SignUp/step-2-address")}
        >
          <Text style={styles.buttonText}>Próximo</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </Pressable>
      </ScrollView>
    </>
  );
}
