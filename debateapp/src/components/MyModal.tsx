import { View, Text, Modal } from 'react-native'
import React from 'react'

type Props={
    visible: boolean;
    onDismiss: () => void;
    children: React.ReactElement;
}
export default function MyModal({visible, onDismiss, children}: Props) {
  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      {children}
    </Modal>
  )
}