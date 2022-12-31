import Button from '../components/Button';
import {useState} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../components/ImageViewer';
const PlaceholderImage = require('../assets/images/Canada-Mountains.webp');
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
        placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}
        // style={styles.image} />
        />
      </View>
      <View> 
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button theme="none" label="Use the photo" />
      </View>

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
  image: {
    width: 320,
    height: 340,
    borderRadius: 10,
  }
});
