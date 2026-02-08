import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tagline: {
        color: "#2563EB",
        fontSize: 12,
        fontWeight: "700",
        marginBottom: 8,
        letterSpacing: 0.5,
        fontFamily: "SF Pro Text",
    },
    Title: {
        color: "#111827",
        fontWeight: "700",
        fontSize: 34,
        fontFamily: "SF Pro Text",
        marginBottom: 16,
        lineHeight: 40,
    },
    titleHighlight: {
        color: "#2563EB",
        fontWeight: "700",
        fontSize: 34,
        fontFamily: "SF Pro Text",
        lineHeight: 40,
    },
    subtitle: {
        color: "#6B7280",
        fontWeight: "400", // Normal weight
        fontSize: 16,
        fontFamily: "SF Pro Text",
        marginBottom: 16,
        lineHeight: 24,
    },
    sectionSpacing: {
        marginTop: 24,
    },
    primaryButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: "center",
    },
    primaryButtonPressed: {
        backgroundColor: "#2563EB",
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "SF Pro Text",
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center", // ✅ igual ao primário
    },
    secondaryButtonText: {
        color: "#374151",
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "SF Pro Text",
        // ❌ removido marginBottom
    },
    secondaryButtonPressed: {
        backgroundColor: "#F9FAFB",
    },
});
