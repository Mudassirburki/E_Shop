import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppText from '../../../components/AppText';
import { ThemeContext } from '../../../context/ThemeContext';
import { BookmarksContext } from '../../../context/BookmarksContext';
import ProductCard from '../../../components/ProductCard';

const Bookmarks = () => {
    const { colors } = useContext(ThemeContext);
    const { bookmarks } = useContext(BookmarksContext);

    const renderItem = ({ item }) => (
        <View style={styles.cardWrapper}>
            <ProductCard item={item} />
        </View>
    );

    const EmptyState = () => (
        <View style={styles.emptyContainer}>
            <AppText.h2 style={{ color: colors.foreground }}>No Bookmarks Yet</AppText.h2>
            <AppText.body style={{ color: colors.secondary, textAlign: 'center', marginTop: 8 }}>
                Deals you save will appear here for quick access.
            </AppText.body>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                data={bookmarks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={bookmarks.length === 0 ? styles.flatListEmpty : styles.flatListContent}
                ListEmptyComponent={EmptyState}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContent: {
        padding: 16,
    },
    flatListEmpty: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cardWrapper: {
        marginBottom: 12,
    },
    emptyContainer: {
        alignItems: 'center',
        paddingHorizontal: 40,
    }
});
