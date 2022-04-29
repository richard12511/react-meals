import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default function MealDetailsScreen({ route, navigation }) {
  const id = route.params.id;
  const meal = MEALS.find(meal => meal.id === id);
  return (
    <View style={styles.container}>
      <Text>{meal.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  buttonPressed: {
    opacity: 0.5,
  },
});
