import React from 'react';

import Modal from 'react-native-modal';
import {ActivityIndicator} from 'react-native';
import {ModalBody} from './styles';
import {Colors} from '../../utils';

interface LoadingProps {
  loading: boolean;
}

function Loading(props: LoadingProps) {
  return (
    <Modal
      isVisible={props.loading}
      style={{alignItems: 'center'}}>
      <ModalBody>
        <ActivityIndicator size={60} color={Colors.PRIMARY_RED} />
      </ModalBody>
    </Modal>
  );
}

export default Loading;
