import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  }}
/>
