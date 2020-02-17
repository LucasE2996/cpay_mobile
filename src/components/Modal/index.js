import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './styles';

export default function CreateModal({
  children,
  display,
  closeModal,
  titleModal,
}) {
  return (
    <Modal visible={display} animationType="slide" transparent={false}>
      <KeyboardAvoidingView
        behavior={Platform.select({ android: null, ios: 'padding' })}
        style={styles.container}
      >
        <View style={styles.title}>
          <Text style={styles.txtTitle}>{titleModal}</Text>

          <TouchableOpacity onPress={closeModal}>
            <FontAwesome name="close" size={40} color={colors.purpleDark} />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>{children}</View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

CreateModal.propTypes = {
  children: PropTypes.node,
  display: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  titleModal: PropTypes.string,
};

CreateModal.defaultProps = {
  children: null,
  titleModal: null,
};
