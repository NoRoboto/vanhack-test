import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async <T>(value: T, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('[error][storeData]: ', e);
  }
}

const getData = async <T>(key: string): Promise<Partial<T | string | undefined>> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue === null) return undefined;

    if (typeof(jsonValue) === 'string') return jsonValue;

    return JSON.parse(jsonValue);
  } catch(e) {
    console.error('[error][getData]: ', e);
  }
}

export const Storage = {
  storeData,
  getData
}

