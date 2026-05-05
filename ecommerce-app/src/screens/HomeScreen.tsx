import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { HomeStackParamList } from "../types/navigation";
import { useGetProductsQuery } from "../store/productApi";
import { FlatList } from "react-native";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList>;
};

const HomeScreen = ({ navigation }: any) => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }
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
      {/* <View style={styles.productsContainer}> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        initialNumToRender={6}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('ProductDetails',{ product:item})}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    // </View>
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

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 6,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },

    elevation: 3,
  },

  imageContainer: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  image: {
    width: "80%",
    height: "100%",
  },

  title: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
  },

  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    color: "#6C5CE7",
  },
});

export default HomeScreen;
