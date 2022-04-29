import { View, Text, StyleSheet } from 'react-native';

export default function MealDetailsScreen({ route, navigation }) {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  buttonPressed: {
    opacity: 0.5,
  },
});
