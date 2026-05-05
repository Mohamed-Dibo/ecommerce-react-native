import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../types/cart";
import { decreaseQty, increaseQty, removeFromCart } from "../store/cartSlice";

const initialCart = [
  { id: 1, name: "Headphones", price: 299, qty: 1, color: "#D946EF", icon: "🎧" },
  { id: 2, name: "Smart Watch", price: 399, qty: 1, color: "#3B82F6", icon: "⌚" },
  { id: 3, name: "Earbuds", price: 199, qty: 2, color: "#10B981", icon: "🎵" },
];

const CartScreen = () => {

    const cart = useSelector((state: any) : CartItem[] => state.cart.items);
    const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Shopping Cart</Text>
      <Text style={styles.subtitle}>{cart.length} items</Text>

      {cart.map((item : CartItem) => (
        <View key={item.id} style={styles.card}>

          <View style={[styles.image, { backgroundColor: item.color }]}>
            <Text style={{ fontSize: 30 }}>{item.icon}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => dispatch(decreaseQty(item.id))}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity
                style={[styles.qtyBtn, styles.plus]}
                onPress={() => dispatch(increaseQty(item.id))}
              >
                <Text style={{ color: "#fff" }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))} style={{ padding: 10 }}>
            <Ionicons name="trash-outline" size={22} color="red" />
          </TouchableOpacity>

        </View>
      ))}

      {/* TOTAL */}
      <View style={styles.totalBox}>
        <Text>Subtotal:${cart.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)} </Text>
        <Text>Shipping: $0.00</Text>
        <Text style={styles.total}>Total: ${cart.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)}</Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontWeight: "bold",
  },

  price: {
    color: "#7C3AED",
    marginVertical: 5,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyBtn: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 8,
  },

  plus: {
    backgroundColor: "#7C3AED",
    marginLeft: 10,
  },

  qty: {
    marginHorizontal: 10,
  },

  totalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },

  total: {
    marginTop: 10,
    fontWeight: "bold",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});