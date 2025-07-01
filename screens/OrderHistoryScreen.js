import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

const OrderHistoryScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Orders from Mock API
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/typicode/demo/orders') // Replace with your API
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  // Loading Indicator
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF4D4D" />
      </View>
    );
  }

  // Render Each Order Item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Order Detail', { orderId: item.id })}
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order ID: {item.id}</Text>
      <Text>Date: {item.date || 'N/A'}</Text>
      <Text>Total Price: ${item.total || '0.00'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OrderHistoryScreen;
