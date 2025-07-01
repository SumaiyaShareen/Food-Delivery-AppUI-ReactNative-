import React from 'react';
import { View, Text } from 'react-native';

const OrderDetailScreen = ({ route }) => {
  const { order } = route.params;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f8f8f8' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Order ID: {order.id}</Text>
      <Text>Date: {order.date}</Text>
      <Text>Total: ${order.total.toFixed(2)}</Text>
    </View>
  );
};

export default OrderDetailScreen;
