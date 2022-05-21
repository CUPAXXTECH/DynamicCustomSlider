import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function MySlider({image, title}) {
  return (
    <View style={styles.item}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 370,
    height: 200,
    borderRadius: 25,
    marginRight: 20,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: 'lightcoral',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'maroon',
  },
});
