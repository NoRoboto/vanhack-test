
import { ImageSourcePropType } from 'react-native';

/*
  0 0
  1 1
  2 2
  3 0
  4 1
  5 2
*/

export function backgroundSelector(index: number, rotation: number, imageList: Array<ImageSourcePropType>) {
  return imageList[index % rotation];
}