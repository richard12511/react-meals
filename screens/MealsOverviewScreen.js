import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMeal(itemData) {
    function pressHandler() {
      navigation.navigate('MealDetails', { item: itemData.item });
    }
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={pressHandler}
      />
    );
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={meal => meal.id} renderItem={renderMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
