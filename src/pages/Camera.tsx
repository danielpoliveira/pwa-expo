import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';


const Camera: React.FC = () => {
  return (
    <View style={styles.container} >
      <ExpoCamera style={styles.camera} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },
})

export default Camera;