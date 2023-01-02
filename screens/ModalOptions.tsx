// Currently not being used 
import {useState} from 'react';
import { View } from '../components/Themed';
import { StyleSheet} from 'react-native';
import EmojiPicker  from "../components/EmojiPicker";
import EmojiList  from  '../components/EmojiList';
import EmojiSticker from '../components/EmojiSticker';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import ImageViewer from '../components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';

const PlaceholderImage = require('../assets/images/Canada-Mountains.webp');

export default function optionsModal(){
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [isModalVisable,  setIsModalVisable] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(null);

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
    
      const onReset = () => {
        setShowAppOptions(false);
      };
    
      const onAddSticker = () => {
        setIsModalVisable(true);
      };
    
      const onModalClose = () => {
        setIsModalVisable(false);
      };
    
      const onSaveImageAsync = async () => {
        // we will implement later
      };
    
      return (
        <View style={styles.container}>
       
          {/* decides what to model to render */}
          {showAppOptions ? (
              <View style={styles.optionsContainer}>
                {/* After new menue bar is rendered this is what shows image */}
                  <View style={styles.imageContainer}>
                    <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
                    {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
                  </View>
    
                  <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset} />
                    <CircleButton onPress={onAddSticker} />
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                  </View>
              
                  <EmojiPicker isVisible={isModalVisable} onClose={onModalClose}>
                    <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
                  </EmojiPicker>
            
            </View>
          ) : (
            <View style={styles.optionsContainer}> 
                <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
                {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
                </View>
                <View style={styles.footerContainer}> 
                    <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
                    <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
                </View>
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
        alignItems: 'center',
        backgroundColor: '#25292e',
      },
      footerContainer: {
        alignItems: 'center',
        backgroundColor: '#25292e',
      },
      optionsContainer: {
        top: 10,
        backgroundColor: '#25292e',
        position: 'absolute',
      },
      optionsRow: {
        left: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#25292e',
      },
    });

