import { ImageSourcePropType } from 'react-native';

export default [
  {
    id: '1',
    title: 'Hello',
    description: 'Are you ready for your amazing new job in IT, abroad or remote?',
    gif: require('assets/onboarding/animat-sign-post-color.gif'),
  },
  {
    id: '2',
    title: `it's Free!`,
    description: 'No cheating, 100 % transparent, we are committed to changing lives.',
    gif: require('assets/onboarding/animat-checkmark-color.gif')
  },
  {
    id: '3',
    title: 'VanHack',
    description: 'Be part of more than 1000 people who have been hired, sign up for free!',
    gif: require('assets/onboarding/animat-compass-color.gif')
  }
];

export interface IOnboardingItem {
  id: string;
  title: string;
  description: string;
  gif: ImageSourcePropType;
}