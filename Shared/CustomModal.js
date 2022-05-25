import { View, Text, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function CustomModal(props){

  function handleKeyboardDismiss(){
    Keyboard.dismiss();
  }

  return (
    <Modal visible={ props.open } animationType="slide">
      <TouchableWithoutFeedback onPress={ handleKeyboardDismiss }>
        <View style={ styles.modalBody }>
          <View style={ styles.modalHeader }>
            <Text style={ styles.text }>{ props.title }</Text>
            <AntDesign name="close" size={ 20 } color="black" onPress={ props.dismissModal }/>
          </View>
          { props.children }
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBody: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'macondo-regular',
    fontSize: 18
  }
});

export default CustomModal;