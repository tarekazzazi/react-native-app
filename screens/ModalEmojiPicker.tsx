import EmojiPicker  from "../components/EmojiPicker";
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ModelEmojiPicker(){
    const [isModalVisable,  setIsModalVisable] = useState(false);

    const onAddSticker = () => {
        setIsModalVisable(true);
    };

    const onModalClose = () => {
        setIsModalVisable(false);
    }
    return (
        <View style={styles.container}> 
       
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
})

