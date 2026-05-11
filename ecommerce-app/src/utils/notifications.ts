import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermissions() {
  if (!Device.isDevice) {
    alert("Must use physical device for notifications");
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Notification permission denied");
    return;
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }
}

export async function sendLocalNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🔥 New Offer!",
      body: "50% discount on all products today!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
}
