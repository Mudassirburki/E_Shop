import React from "react";
import { View, Modal as RNModal, StyleSheet, TouchableOpacity } from "react-native";
import { X } from "lucide-react-native";
import AppText from "../AppText";

const Modal = ({
    visible,
    onClose,
    children,
    title,
    animation = "fade",
}) => {
    return (
        <RNModal
            visible={visible}
            animationType={animation}
            transparent={true}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.container}
                >
                    {/* Header with Centered Title and Top-Right Close Icon */}
                    <View style={styles.header}>
                        <View style={styles.titleWrapper}>
                            {title && <AppText.h2 style={styles.titleText}>{title}</AppText.h2>}
                        </View>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <X size={24} color="#555" />
                        </TouchableOpacity>
                    </View>

                    {/* Children Content */}
                    <View style={styles.content}>
                        {children}
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </RNModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    titleWrapper: {
        flex: 1,
        alignItems: "center",
        paddingLeft: 24, // Offset for the close button to keep title centered
    },
    titleText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2C3E50",
        textAlign: "center",
    },
    closeButton: {
        padding: 4,
    },
    content: {
        marginTop: 0,
    },
});
