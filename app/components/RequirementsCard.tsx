import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "../../styles/requirementsCard.styles";

type RequirementItemProps = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    description: string;
};

function RequirementItem({ icon, title, description }: RequirementItemProps) {
    return (
        <View style={styles.item}>
            <View style={styles.iconWrapper}>
                <Ionicons name={icon} size={18} color="#2563EB" />
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.itemTitle}>{title}</Text>
                {description && <Text style={styles.itemDescription}>{description}</Text>}
            </View>
        </View>
    );
}

const getIconForRequirement = (title: string): keyof typeof Ionicons.glyphMap => {
    const t = title.toLowerCase();
    if (t.includes("uniforme")) return "shirt-outline";
    if (t.includes("experiência")) return "flash-outline";
    if (t.includes("documentação")) return "document-text-outline";
    return "checkmark-circle-outline";
};

export default function RequirementsCard({ requirements }: { requirements?: any[] }) {
    if (!requirements || requirements.length === 0) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Requisitos</Text>

            <View style={styles.card}>
                {requirements.map((req, index) => (
                    <RequirementItem
                        key={req.id || index}
                        icon={getIconForRequirement(req.title)}
                        title={req.title}
                        description={req.description || ""}
                    />
                ))}
            </View>
        </View>
    );
}
