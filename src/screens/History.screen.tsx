import { Text, View } from 'react-native';
import { useAppContext } from '../App.provider';
import MoodItemRow from '../components/MoodItemRow';

export default function History() {
  const { moodList } = useAppContext();

  return (
    <View>
      {moodList.map((item, index) => (
        <MoodItemRow key={index} item={item} />
      ))}
    </View>
  );
}
