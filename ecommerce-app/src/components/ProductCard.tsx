import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {Product} from '../types/product'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/navigation'

type Props = {
    items : Product [],
    onPress : () => void,
 navigation: NativeStackNavigationProp<HomeStackParamList>;
}


const ProductCard = ({navigation,items , onPress} :Props) => {
  return (
    <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            initialNumToRender={6}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetails', { product: item } as any)}>
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
  )
}

export default ProductCard

const styles = StyleSheet.create({
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
})