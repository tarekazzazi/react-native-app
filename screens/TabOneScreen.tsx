import Button from '../components/Button';
import {useState} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../components/ImageViewer';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import EmojiPicker  from "../components/EmojiPicker";


const PlaceholderImage = require('../assets/images/Canada-Mountains.webp');
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisable,  setIsModalVisable] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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

  // code to condense
  const onReset = () => {
    // will condese later
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // will condese later
    setIsModalVisable(true);
  };

  const onModalClose = () => {
    // will condese later
    setIsModalVisable(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
         <ImageViewer 
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
      </View>
      {/* decides what to model to render */}
      {showAppOptions ? (
        // will move into model later...
          <View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
              </View>
          
          <EmojiPicker isVisible={isModalVisable} onClose={onModalClose}>

          </EmojiPicker>
        </View>
      ) : (
        // will move into model later...
      <View style={styles.footerContainer}> 
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#25292e',
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
