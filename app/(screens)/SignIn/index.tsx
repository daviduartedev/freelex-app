import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
import styles from "../../../styles/signIn.styles";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.close}>
          <Ionicons name="close" size={22} color="#111827" />
        </View>

        <Text style={styles.header}>Criar conta no TurnoLivre</Text>

        <View style={styles.logoWrapper}>
          <View style={styles.logoBox}>
            <Image
              source={{ uri: "https://i.imgur.com/8Km9tLL.png" }}
              style={styles.logo}
            />
          </View>
        </View>

        <Text style={styles.title}>Vamos começar</Text>
        <Text style={styles.subtitle}>
          Crie sua conta para acessar os turnos disponíveis
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Digite seu nome completo"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Digite seu e-mail"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Crie uma senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={18}
                color="#9CA3AF"
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Confirmar senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Confirme sua senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
            />
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={18}
                color="#9CA3AF"
              />
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </Pressable>

        <Text style={styles.or}>OU CADASTRE-SE COM</Text>

        <View style={styles.socialRow}>
          <Pressable style={styles.socialButton}>
            <Image
              source={{ uri: "https://i.imgur.com/Z7AzH2c.png" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Google</Text>
          </Pressable>

          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-apple" size={18} color="#000" />
            <Text style={styles.socialText}>Apple</Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Já tem uma conta?{" "}
          <Text style={styles.link}>Entrar</Text>
        </Text>

      </ScrollView>
    </>
  );
}
