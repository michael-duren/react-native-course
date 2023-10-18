import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MoodOptionType, MoodOptionWithTimeStamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppData = {
  moodList: MoodOptionWithTimeStamp[];
};

const dataKey = 'my-app-data' as const;

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch (error) {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {}
  return null;
};

type AppContextType = {
  greeting: 'hello';
  moodList: MoodOptionWithTimeStamp[];
  setMoodList: React.Dispatch<React.SetStateAction<MoodOptionWithTimeStamp[]>>;
  handleSelectMood: (selectedMood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  greeting: 'hello',
  moodList: [],
  setMoodList: () => {},
  handleSelectMood: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [moodList, setMoodList] = useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    console.log('CLICKED');
    setMoodList(currentList => {
      const newMoodList = [
        ...currentList,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData({ moodList: newMoodList });
      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };
    fetchAppData();
  }, []);

  return (
    <AppContext.Provider
      value={{ greeting: 'hello', moodList, setMoodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
