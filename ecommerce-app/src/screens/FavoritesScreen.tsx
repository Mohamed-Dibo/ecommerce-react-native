import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { Ionicons } from "@expo/vector-icons";

const FavoritesScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: any) => state.favorites.items);

   if(!favorites.length) {
    return <Text>No favorites yet 😢</Text>
   }
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Favorites ❤️
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              margin: 8,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 10,
            }}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 120 }}
              resizeMode="contain"
            />

            <Text numberOfLines={2}>{item.title}</Text>
            <Text style={{ color: "#6C5CE7", fontWeight: "bold" }}>
              ${item.price}
            </Text>

            {/* زرار حذف من الفيفوريت */}
            <TouchableOpacity
              onPress={() => dispatch(toggleFavorite(item))}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <Ionicons name="heart" size={20} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;