
import { StyleSheet, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OptionsModal from './ModalOptions';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

    <View> 
    <OptionsModal />
    </View>

    <GestureHandlerRootView>

    </GestureHandlerRootView>
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
});
