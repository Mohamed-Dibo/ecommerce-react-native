import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
 import { CartItem } from "../types/cart";
import { toggleFavorite } from "../store/favoritesSlice";


const ProductDetails = ({ route, navigation }: any) => {
  const dispatch = useDispatch();
  const { product } = route.params;
   const cart = useSelector((state: any) : CartItem[] => state.cart.items);
   const isInCart = cart.some(item => item.id === product.id)

  const fav = useSelector((state:any) => state.favorites.items)
 
  const inFav = fav.some((itm :any) => itm.id === product.id)

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* IMAGE HEADER */}
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartBtn} onPress={()=> dispatch(toggleFavorite(product))}>
          <Ionicons name={inFav ? 'heart' : "heart-outline"}  color={inFav ? "red" : "gray"} size={20} />
        </TouchableOpacity>

        <Image
          source={{ uri: product.image }}
          style={styles.image}
           resizeMode="contain"
          
        />
      </View>

      {/* INFO */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        <Text style={styles.rating}>⭐ 4.8 (128 reviews)</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Experience crystal-clear audio with active noise cancellation. Perfect
          for music lovers and professionals.
        </Text>

        <Text style={styles.sectionTitle}>Features</Text>

        <View style={styles.featureBox}>
          <Text>• 40-hour battery life</Text>
        </View>

        <View style={styles.featureBox}>
          <Text>• Active noise cancellation</Text>
        </View>

        <View style={styles.featureBox}>
          <Text>• Premium leather ear cups</Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={[styles.button, isInCart && { backgroundColor: "green"}]}
          onPress={() => {
            dispatch(addToCart(product));
          }}
        >
          <Text style={styles.buttonText}>{isInCart ? 'Added' : '🛒 Add to Cart'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  imageContainer: {
    height: 300,
    backgroundColor: "#D946EF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  productEmoji: {
    fontSize: 80,
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  heartBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  infoContainer: {
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7C3AED",
  },

  rating: {
    marginTop: 10,
    color: "#666",
  },

  sectionTitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },

  description: {
    marginTop: 8,
    color: "#555",
    lineHeight: 20,
  },

  featureBox: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 200,
    height:200
  },
});
