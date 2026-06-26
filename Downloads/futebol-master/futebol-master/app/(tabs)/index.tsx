import { View, StyleSheet } from "react-native";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";


const PlaceholderImage = require('@/assets/images/copadomundo.png');

export default function Index() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
const {showAppOptions, setShowAppOptions} = useState<boolean>(false);

  const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 1,
  });
  
  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
    setShowAppOptions(true);
  } else {
    alert('You did not select any image.');
  }
};
const onReset = () => {
  setShowAppOptions(false);
};

const onAddSticker = () =>{
  // we will implement
};

const onSaveImageAsync = async () => {

};

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
          </View >
        ) : (
        
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
          <Button label="Use this a photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
      </View>
  );
}
      
      
      const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#d4d7da',
        justifyContent: "center",
        alignItems: "center",
      },
      imageContainer: {
        flex: 1,
      },
     footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'fff'
      },

      optionContainer: {
        position: 'absolute',
        bottom: 80,
      },
      optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
    });
    
    
