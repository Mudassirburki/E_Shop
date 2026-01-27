// src/services/NotificationService.js
import * as Notifications from 'expo-notifications';

// ⚠️ VERY IMPORTANT (foreground notifications ke liye)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
     shouldShowBanner: true, // 👈 popup/banner show hoga
    shouldShowList: true,   // 👈 notification list me bhi ayega
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Ask permission
export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

// Show immediate notification
export async function showNotification(title, body) {
  const granted = await requestPermissions();
  if (!granted) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: null, // 🔥 immediately
  });
}

// Schedule notification
export async function scheduleNotification(title, body, delayInMinutes = 10) {
  const granted = await requestPermissions();
  if (!granted) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds: delayInMinutes * 60,
    },
  });
}
