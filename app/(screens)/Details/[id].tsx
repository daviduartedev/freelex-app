import AppHeader from "@/app/components/header";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../styles/id.styles";
import { useEffect, useState } from "react";
import ConfirmApplication from "@/app/components/bottomSheet";
import RequirementsCard from "@/app/components/RequirementsCard";
import api from "@/app/services/api";

export default function Details() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const [showConfirm, setShowConfirm] = useState(false);
    const [item, setItem] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) fetchShift();
    }, [id]);

    const fetchShift = async () => {
        try {
            const response = await api.get(`/shifts/${id}`);
            setItem(response.data);
        } catch (error) {
            console.error("Erro ao buscar detalhes do turno:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: "center" }]}>
                <ActivityIndicator size="large" color="#2563EB" />
            </View>
        );
    }

    if (!item) {
        return (
            <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
                <Text>Turno não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <AppHeader
                title="Detalhes do Turno"
                leftAction={{
                    icon: <Ionicons name="arrow-back" size={20} color="#111827" />,
                    onPress: () => router.back(),
                }}
                rightActions={[
                    {
                        icon: <Ionicons name="share-social" size={20} color="#111827" />,
                        onPress: () => { },
                    },
                ]}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageCard}>
                    <Image
                        source={{ uri: item.imageUrl || "https://images.unsplash.com/photo-1516788875874-c5912cae7b43" }}
                        style={styles.image}
                    />

                    <View style={styles.imageOverlay}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>DISPONÍVEL</Text>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>

                        <View style={styles.dateRow}>
                            <Ionicons name="calendar-outline" size={14} color="#E5E7EB" />
                            <Text style={styles.dateText}>
                                {new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>VALOR LÍQUIDO</Text>
                        <Text style={styles.infoValuePrimary}>{`R$ ${item.value},00`}</Text>
                        <Text style={styles.infoSubPositive}>+ Taxa de Serviço</Text>
                    </View>

                    <View style={styles.infoCard}>
                        <Text style={styles.infoLabel}>DURAÇÃO</Text>
                        <Text style={styles.infoValue}>04 Horas</Text>
                        <Text style={styles.infoSub}>{`${item.startTime} às ${item.endTime}`}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Localização</Text>

                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={16} color="#2563EB" />
                        <Text style={styles.locationText}>
                            Rua Augusta, 1234 - Consolação, São Paulo
                        </Text>
                    </View>

                    <MapView
                        style={{ height: 160, marginTop: 10 }}
                        initialRegion={{
                            latitude: -23.561684,
                            longitude: -46.656139,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: -23.561684,
                                longitude: -46.656139,
                            }}
                        />
                    </MapView>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Descrição das Tarefas</Text>

                    <Pressable
                        style={styles.primaryButton}
                        onPress={() => setShowConfirm(true)}
                    >
                        <Text style={styles.primaryButtonText}>
                            Candidatar-se ao Turno →
                        </Text>
                    </Pressable>
                    <View style={styles.taskItem}>
                        <Ionicons name="checkmark-circle" size={16} color="#2563EB" />
                        <Text style={styles.taskText}>
                            {item.description || "Nenhuma descrição detalhada fornecida."}
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <RequirementsCard requirements={item.requirements} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre a Empresa</Text>

                    <View style={styles.companyRow}>
                        <View>
                            <Text style={styles.companyName}>
                                {item.company?.name || "Empresa Parceira"}
                            </Text>
                            <Text style={styles.companyRating}>
                                ⭐ 4.9 (128 avaliações)
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#9CA3AF"
                        />
                    </View>
                </View>
                {showConfirm && (
                    <ConfirmApplication
                        onCancel={() => setShowConfirm(false)}
                        onConfirm={() => {
                            setShowConfirm(false);
                        }}
                    />
                )}

            </ScrollView>
        </View>
    );
}
