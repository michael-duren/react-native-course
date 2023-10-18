import { StyleSheet, Text, View } from 'react-native';
import MoodPicker from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

export default function Home() {
  const { handleSelectMood } = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
