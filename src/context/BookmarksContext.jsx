import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        loadBookmarks();
    }, []);

    const loadBookmarks = async () => {
        try {
            const storedBookmarks = await AsyncStorage.getItem('bookmarks');
            if (storedBookmarks) {
                setBookmarks(JSON.parse(storedBookmarks));
            }
        } catch (error) {
            console.error('Failed to load bookmarks', error);
        }
    };

    const saveBookmarks = async (newBookmarks) => {
        try {
            await AsyncStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
        } catch (error) {
            console.error('Failed to save bookmarks', error);
        }
    };

    const addToBookmarks = (item) => {
        const newBookmarks = [...bookmarks, item];
        setBookmarks(newBookmarks);
        saveBookmarks(newBookmarks);
    };

    const removeFromBookmarks = (itemId) => {
        const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== itemId);
        setBookmarks(newBookmarks);
        saveBookmarks(newBookmarks);
    };

    const isBookmarked = (itemId) => {
        return bookmarks.some((bookmark) => bookmark.id === itemId);
    };

    const toggleBookmark = (item) => {
        if (isBookmarked(item.id)) {
            removeFromBookmarks(item.id);
        } else {
            addToBookmarks(item);
        }
    };

    return (
        <BookmarksContext.Provider value={{
            bookmarks,
            addToBookmarks,
            removeFromBookmarks,
            isBookmarked,
            toggleBookmark
        }}>
            {children}
        </BookmarksContext.Provider>
    );
};
