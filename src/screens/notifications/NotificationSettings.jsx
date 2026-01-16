import React, { useState } from 'react'
import AppHeader from '../../components/Header/AppHeader'
import { useNavigation } from '@react-navigation/native';
import { Notification_Settings, SUGGESTED_KEYS } from '../../data/dummyData';
import NotificationCard from '../../components/NotificationCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../../components/AppText';
import Modal from '../../components/modal/Modal';
import { TextInput, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';



const NotificationSettings = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [personalizedKeywords, setPersonalizedKeywords] = useState(
    Notification_Settings.filter(item => item.type === "personalized" && item.id !== 1)
  );

  const handleAddKeyword = (val) => {
    const textToAdd = typeof val === 'string' ? val : keyword;
    if (textToAdd.trim()) {
      const newKeyword = {
        id: Date.now(),
        title: textToAdd,
        icon: "tag-outline",
        type: "personalized"
      };
      setPersonalizedKeywords([newKeyword, ...personalizedKeywords]);
      setKeyword('');
      setShowModal(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Notification Preferences"
        leftIcon="ArrowLeft"
        leftIconType="lucide"
        onLeftPress={() => navigation.goBack()}
      />

      <SafeAreaView style={styles.listContainer}>
        {/* Personalized Section */}
        <AppText.body style={styles.sectionHeader}>Personalized Keyword Notifications</AppText.body>

        <NotificationCard
          variant="add"
          onPress={() => setShowModal(true)}
        />

        <FlatList
          data={personalizedKeywords}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <NotificationCard
              item={item}
              variant="personalized"
              onPress={() => console.log('Keyword settings:', item.title)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 10 }}
        />

        {/* General Section */}
        <AppText.body style={[styles.sectionHeader, { marginTop: 20 }]}>General</AppText.body>
        <FlatList
          data={Notification_Settings.filter(item => item.type === "general")}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NotificationCard
              item={item}
              variant="settings"
              onPress={() => console.log('General setting:', item.title)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      {/* Reusable Modal based on Image Design */}
      <Modal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Keyword"
      >
        <View style={styles.modalBody}>
          <TextInput
            style={styles.input}
            placeholder="Enter keyword"
            placeholderTextColor="#AAA"
            value={keyword}
            onChangeText={setKeyword}
            autoFocus
          />

          <View style={styles.tagWrapper}>
            {SUGGESTED_KEYS.map((tag, index) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                style={styles.tag}
                onPress={() => handleAddKeyword(tag)}
              >
                <AppText.small style={styles.tagText}>{tag}</AppText.small>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footerButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowModal(false)}
            >
              <AppText.body style={styles.cancelButtonText}>Cancel</AppText.body>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.addButton, !keyword.trim() && styles.disabledButton]}
              onPress={() => handleAddKeyword()}
              disabled={!keyword.trim()}
            >
              <AppText.body style={styles.addButtonText}>Add</AppText.body>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default NotificationSettings

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContainer: { padding: 16 },
  sectionHeader: {
    color: "#E97639",
    fontWeight: '700',
    marginBottom: 12,
    fontSize: 18
  },
  modalBody: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Manrope-Regular',
  },
  tagWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#E97639',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: '#FFF',
  },
  tagText: {
    color: '#E97639',
    fontSize: 14,
  },
  footerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D5D8DC',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  cancelButtonText: {
    color: '#34495E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  addButton: {
    flex: 1,
    backgroundColor: '#E67E22',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginLeft: 8,
  },
  disabledButton: {
    backgroundColor: '#F5B041',
    opacity: 0.7,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});