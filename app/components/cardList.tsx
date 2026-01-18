import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../styles/cardList.styles";

type cardListProps = {
  categoria: string;
  imagem: any;
  titulo: string;
  local: string;
  distancia: string;
  horario: string;
  duracao: string;
  valorHora: string;
  total: string;
  onPress?: () => void;
};

export default function cardList({
  categoria,
  imagem,
  titulo,
  local,
  distancia,
  horario,
  duracao,
  valorHora,
  total,
  onPress,
}: cardListProps) {
  return (
    <View style={styles.card}>
      {/* IMAGEM */}
      <View style={styles.imageContainer}>
        <Image source={imagem} style={styles.image} resizeMode="cover" />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{categoria}</Text>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.subtitle}>{local}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{valorHora}</Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </View>

        {/* INFO */}
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            📍 {local} • {distancia}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            🕒 {horario} • {duracao}
          </Text>
        </View>

        {/* CTA */}
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Ver Detalhes do Turno</Text>
        </Pressable>
      </View>
    </View>
  );
}
