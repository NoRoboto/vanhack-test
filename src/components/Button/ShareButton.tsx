import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';

import { Icon } from '~/components/CircleIcon';

export const ShareButton: React.FC<{ title: string, message: string, color?: string, iconName: keyof typeof MaterialCommunityIcons.glyphMap }> = ({ title, message, color, iconName }) => {
  const onShare = async () => {
    try {
      await Share.share({
        title,
        message,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <TouchableOpacity onPress={onShare}>
      <Icon name={iconName} backgroundColor={color} />
    </TouchableOpacity>
  );
}
