import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../common/GlobalStyles';

const Post = ({image, text}: {image: any; text: string}) => {
  return (
    <View style={{paddingTop: 15}}>
      <Image source={image} />
      <Text style={styles.quote}>{text}</Text>
      <TouchableOpacity style={styles.more}>
        <Text>See more...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  quote: {
    color: Color.primary03,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  more: {
    padding: 10,
  },
  moreText: {
    color: Color.gray06,
  },
});
