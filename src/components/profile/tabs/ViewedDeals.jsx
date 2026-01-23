import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import { ThemeContext } from '../../../context/ThemeContext';

const ViewedDeals = () => {
    const { colors } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <AppText.h2 style={{ color: colors.foreground }}>Viewed Deals</AppText.h2>
            <AppText.body style={{ color: colors.secondary }}>No recently viewed deals.</AppText.body>
        </View>
    );
};

export default ViewedDeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
});
