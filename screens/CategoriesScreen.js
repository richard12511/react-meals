import CategoryGridTile from '../components/CategoryGridTile';
import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryGridTile(itemData) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

export default function CategoriesScreen() {
  return (
    <View>
      <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryGridTile} />
    </View>
  );
}
