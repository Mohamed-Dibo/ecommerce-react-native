import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { HomeStackParamList } from "../types/navigation";

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299",
    color: "#D946EF",
    icon: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$399",
    color: "#3B82F6",
    icon: "⌚",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$199",
    color: "#10B981",
    icon: "🎵",
  },
  {
    id: 4,
    name: "Laptop Pro",
    price: "$1299",
    color: "#F97316",
    icon: "💻",
  },
];

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList>;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* LEFT */}
        <View>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>Find your perfect products</Text>
        </View>

        {/* RIGHT ICONS */}
        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconBox}>
            <Text>🌙</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox}>
            <Text>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search products..."
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {/* CATEGORIES HEADER */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* CATEGORIES LIST */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryCard}>
          <Text style={styles.icon}>📱</Text>
          <Text style={styles.categoryText}>Phones</Text>
        </View>

        <View style={styles.categoryCard}>
          <Text style={styles.icon}>⌚</Text>
          <Text style={styles.categoryText}>Watches</Text>
        </View>

        <View style={styles.categoryCard}>
          <Text style={styles.icon}>🎧</Text>
          <Text style={styles.categoryText}>Audio</Text>
        </View>

        <View style={styles.categoryCard}>
          <Text style={styles.icon}>💻</Text>
          <Text style={styles.categoryText}>Laptops</Text>
        </View>
      </View>

      {/* PRODUCTS HEADER */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* PRODUCTS LIST */}
     <View style={styles.productsContainer}>
  {PRODUCTS.map((item) => (
    <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => navigation.navigate("ProductDetails")}>
      <View
        style={[
          styles.productImage,
          { backgroundColor: item.color },
        ]}
      >
        <Text style={styles.productEmoji}>{item.icon}</Text>
      </View>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  ))}
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1C1E",
  },

  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 4,
  },

  icons: {
    flexDirection: "row",
  },

  iconBox: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 12,
    marginLeft: 10,
  },

  searchBox: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  input: {
    height: 45,
  },
  sectionHeader: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    color: "#0A84FF",
    fontSize: 14,
  },

  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  categoryCard: {
    backgroundColor: "#fff",
    width: 70,
    height: 80,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  icon: {
    fontSize: 22,
  },

  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  productsContainer: {
   flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: 15,
  },

  productCard: {
    width: "48%",
  marginBottom: 20,
  },

  productImage: {
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  productEmoji: {
    fontSize: 40,
  },

  productName: {
    marginTop: 10,
    fontWeight: "600",
  },

  productPrice: {
    marginTop: 5,
    color: "#0A84FF",
    fontWeight: "bold",
  },
});

export default HomeScreen;
