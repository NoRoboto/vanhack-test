import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from 'react-native';

import slides from '~/data/onboarding';
import { OnboardingItem } from './OnboardingItem';
import { OnboardingDots } from './OnboardingDots';

export const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const onViewableItemsChanged = useRef((info: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    setCurrentIndex(info?.viewableItems?.[0]?.index || currentIndex);
  }).current;
  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <OnboardingItem item={item} isLastItem={index === slides.length - 1} />}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewableItemsChanged}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
      />
      <OnboardingDots currentIndex={currentIndex} length={slides.length} />
    </>
  );
}