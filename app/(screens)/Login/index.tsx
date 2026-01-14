import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import styles from "./index.styles";

export default function Login() {
  const disabled = true;
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        <View>
          <Text style={styles.title}>{
            "Acesse sua carteira de\nsaúde."
          }</Text>

          <Text style={styles.subtitle}>
            {
              "Seus dados são protegidos com\ncriptografia."
            }
          </Text>
        </View>


        <View
          style={{
            height: 1,
            backgroundColor: "#E5E7EB",
            marginVertical: 24,
            opacity: 0.6,
          }}
        />

        <View style={styles.segment}>
          <Pressable
            style={[
              styles.segmentButton,
              mode === "login" && styles.segmentActive
            ]}
            onPress={() => setMode("login")}
          >
            <Text style={mode === "login" ? styles.segmentTextActive : styles.segmentText}>
              Entrar
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.segmentButton,
              mode === "register" && styles.segmentActive
            ]}
            onPress={() => setMode("register")}
          >
            <Text style={mode === "register" ? styles.segmentTextActive : styles.segmentText}>
              Criar Conta
            </Text>
          </Pressable>
        </View>
        {/* EMAIL - comum aos dois */}
        <View style={styles.field}>
          <TextInput
            placeholder="Seu e-mail"
            style={styles.input}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {mode === "register" && (
          <View style={styles.field}>
            <TextInput
              placeholder="Seu nome completo"
              style={styles.input}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        )}

        <View style={styles.field}>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Sua senha"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
              placeholderTextColor="#9CA3AF"
            />

            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#6B7280"
              />
            </Pressable>
          </View>
        </View>

        {mode === "register" && (
          <View style={styles.field}>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Confirmar senha"
                secureTextEntry
                style={styles.passwordInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        )}

        {mode === "login" && (
          <View style={styles.labelRow}>
            <Pressable>
              <Text style={styles.forgot}>Esqueceu a senha?</Text>
            </Pressable>
          </View>
        )}

        <View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            disabled={disabled}
          >
            <Text style={styles.buttonText}>
              {mode === "login" ? "Entrar" : "Criar conta"}
            </Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.disclaimer}>
            Este aplicativo não realiza diagnósticos médicos nem substitui
            profissionais de saúde.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
