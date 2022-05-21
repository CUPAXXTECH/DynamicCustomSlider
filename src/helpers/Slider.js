/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';

export default function Slider({sliderItem, children, duration}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onSlideChange = useCallback(() => {
    const newIndex =
      selectedIndex === sliderItem.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: 390 * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, duration);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(intervalId);
    };
  });

  const onTouchStart = () => {
    clearInterval(intervalId);
  };

  const onTouchend = () => {
    startInterval();
  };

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let currentIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(currentIndex);
  };
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchend}
        onMomentumScrollEnd={setIndex}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
      <View style={styles.parentDot}>
        {sliderItem.map((val, key) => (
          <View
            key={key}
            style={[
              styles.dot,
              {
                backgroundColor:
                  key === selectedIndex ? 'darkgray' : 'lightgray',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentDot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 2,
    borderRadius: 100,
  },
});
