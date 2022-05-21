import {View, StyleSheet} from 'react-native';
import React from 'react';

import MySlider from './src/components/MySlider';

import Slider from './src/helpers/Slider';

const dummySlider = [
  {
    title: 'Batman',
    image:
      'https://images.unsplash.com/photo-1542410613-d073472c3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'Civil Wars',
    image:
      'https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    title: 'Grook',
    image:
      'https://images.unsplash.com/photo-1557342960-7ea3df1d8630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80',
  },
  {
    title: 'Deadpool',
    image:
      'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'Spiderman',
    image:
      'https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
];

const dummySlider2 = [
  {
    title: 'New Batman',
    image:
      'https://images.unsplash.com/photo-1542410613-d073472c3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'New Civil Wars',
    image:
      'https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    title: 'New Grook',
    image:
      'https://images.unsplash.com/photo-1557342960-7ea3df1d8630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80',
  },
  {
    title: 'New Deadpool',
    image:
      'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'New Spiderman',
    image:
      'https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'New Grook 2',
    image:
      'https://images.unsplash.com/photo-1557342960-7ea3df1d8630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80',
  },
  {
    title: 'New Deadpool 2',
    image:
      'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    title: 'New Spiderman 2',
    image:
      'https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Slider sliderItem={dummySlider} duration={5000}>
        {dummySlider.map((item, index) => (
          <MySlider key={index} image={item.image} title={item.title} />
        ))}
      </Slider>
      <Slider sliderItem={dummySlider2} duration={3000}>
        {dummySlider2.map((item, index) => (
          <MySlider key={index} image={item.image} title={item.title} />
        ))}
      </Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
