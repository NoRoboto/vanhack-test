import React from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';

import { IJobItemProp } from '~/api/getJobList';

const AnimatedList: React.FC<{
  data: IJobItemProp[] | undefined, renderItem: ({ item, index }: {
    item: IJobItemProp;
    index: number;
  }) => JSX.Element
}> = ({ data, renderItem }) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();

  const renderItemWrapper = ({ item, index }: { item: IJobItemProp, index: number }) => {
    const inputRange = [
      -1,
      0,
      Math.floor(height * 0.2) * index,
      Math.floor(height * 0.2) * (index + 4),
    ];
    const scale = 1;
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const Offset = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 1000],
    });

    return (
      <Animated.View
        style={{
          transform: [{ scale: scale }, { translateX: Offset }],
          opacity: opacity,
        }}
      >
        {renderItem({ item, index })}
      </Animated.View>
    );
  }

  return (
    <Animated.FlatList
      keyExtractor={(item) => item.id + ''}
      data={data || []}
      renderItem={renderItemWrapper}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    />
  );
}

export default AnimatedList
