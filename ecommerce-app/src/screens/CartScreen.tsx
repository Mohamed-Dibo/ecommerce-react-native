import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialCart = [
  { id: 1, name: "Headphones", price: 299, qty: 1, color: "#D946EF", icon: "🎧" },
  { id: 2, name: "Smart Watch", price: 399, qty: 1, color: "#3B82F6", icon: "⌚" },
  { id: 3, name: "Earbuds", price: 199, qty: 2, color: "#10B981", icon: "🎵" },
];

const CartScreen = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Shopping Cart</Text>
      <Text style={styles.subtitle}>{cart.length} items</Text>

      {cart.map((item) => (
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
                onPress={() => decreaseQty(item.id)}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity
                style={[styles.qtyBtn, styles.plus]}
                onPress={() => increaseQty(item.id)}
              >
                <Text style={{ color: "#fff" }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Ionicons name="trash-outline" size={22} color="red" />
          </TouchableOpacity>

        </View>
      ))}

      {/* TOTAL */}
      <View style={styles.totalBox}>
        <Text>Subtotal: ${subtotal}</Text>
        <Text>Shipping: ${shipping}</Text>
        <Text style={styles.total}>Total: ${total}</Text>
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