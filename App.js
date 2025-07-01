import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import RestaurantDetailsScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderTrackingScreen from './screens/OrderTrackingScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';

// Create Navigators
const Tab = createBottomTabNavigator();
const OrderStack = createStackNavigator();

function OrderStackNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order History" component={OrderHistoryScreen} />
      <OrderStack.Screen name="Order Detail" component={OrderDetailScreen} />
    </OrderStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Details') iconName = 'restaurant';
            else if (route.name === 'Cart') iconName = 'cart';
            else if (route.name === 'Checkout') iconName = 'cash';
            else if (route.name === 'Track') iconName = 'map';
            else if (route.name === 'Profile') iconName = 'person';
            else if (route.name === 'Orders') iconName = 'list';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF4D4D',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={RestaurantDetailsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
        <Tab.Screen name="Track" component={OrderTrackingScreen} />
        <Tab.Screen name="Orders" component={OrderStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
