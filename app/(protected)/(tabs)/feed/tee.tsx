
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CircleButton2 from '../../components/CircleButton2';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import { AuthContext } from "../../../utils/authContext";

export default function Index() {
  const authContext = useContext(AuthContext)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const starter = () => {
    console.log('dandini!')
  };

  const onAddSticker = () => {
    console.log('on add sticker...')
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  useEffect(
    () => {
      console.log('IsModelVisible changed...');
    }, [isModalVisible]
  )

  useEffect(
    () => {
      setTimeout(
        () => {
          console.log('initing starter function...')
          starter()
        }, 1000
      )
    }, []
  )

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View> */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={test} />
            <CircleButton2 onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Auxiliary Links" onPress={authContext.logOut} icon={"star"} />
          <Button theme="primary" label="Logout" onPress={authContext.logOut} icon={"coffee"}/>
        </View>
      )}
      {/* <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
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
