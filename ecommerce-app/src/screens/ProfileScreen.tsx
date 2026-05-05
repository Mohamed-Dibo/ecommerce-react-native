import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.title}>Profile</Text>

      {/* USER CARD */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={30} color="#fff" />
        </View>

        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
        </View>
      </View>

      {/* MENU ITEMS */}
      <MenuItem icon="cube-outline" title="My Orders" badge="3" />
      <MenuItem icon="heart-outline" title="Favorites" />
      <MenuItem icon="card-outline" title="Payment Methods" />
      <MenuItem icon="notifications-outline" title="Notifications" badge="5" />
      <MenuItem icon="settings-outline" title="Settings" />

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={20} color="red" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;


const MenuItem = ({ icon, title, badge }: any) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#fff" />
        </View>
        <Text style={styles.menuText}>{title}</Text>
      </View>

      <View style={styles.menuRight}>
        {badge && <Text style={styles.badge}>{badge}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDE9FE",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#7C3AED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  email: {
    color: "#666",
  },

  menuItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#7C3AED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  menuText: {
    fontWeight: "500",
  },

  menuRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    backgroundColor: "#7C3AED",
    color: "#fff",
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 8,
  },

  logoutBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "red",
    marginLeft: 8,
    fontWeight: "bold",
  },
});