import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video  } from 'expo-av';

export default function MyVideo(props) {
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: props.data.url,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
    video:{
        height:200,
        width:200
    }
}); 
