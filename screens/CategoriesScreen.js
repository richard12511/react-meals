import CategoryGridTile from '../components/CategoryGridTile';
import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryGridTile(itemData) {
    function pressHandler() {
      navigation.navigate('Meals Overview');
    }

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }

  return (
    <View>
      <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryGridTile} numColumns={2} />
    </View>
  );
}
