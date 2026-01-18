import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/componentHome.styles";

type componentHomeProps = {
  disabled?: boolean;
  onPressPrimary?: () => void;
  onPressSecondary?: () => void;
};

export default function ComponentHome({
  disabled = false,
  onPressPrimary,
  onPressSecondary,
}: componentHomeProps) {
  return (
    <>
      <View>
        <Text style={styles.title}>
          Sua liberdade,{"\n"}
          <Text style={styles.titleHighlight}>seu turno</Text>
        </Text>

        <Text style={styles.subtitle}>
          Conectando profissionais{"\n"}
          qualificados a empresas que{"\n"}
          precisam de talento agora.
        </Text>
      </View>

      <View style={styles.sectionSpacing}>
        <Pressable
          onPress={onPressPrimary}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          disabled={disabled}
        >
          <Text style={styles.primaryButtonText}>
            Encontrar Oportunidades →
          </Text>
        </Pressable>
      </View>

      <View style={styles.sectionSpacing}>
        <Pressable
          onPress={onPressSecondary}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          disabled={disabled}
        >
          <Text style={styles.secondaryButtonText}>
            Já possui uma conta? Entrar
          </Text>
        </Pressable>
      </View>
    </>
  );
}
