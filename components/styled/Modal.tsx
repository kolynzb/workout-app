import { StyleSheet, Text, View, Modal as DefaultModel } from "react-native";
import React, { FunctionComponent, useState } from "react";
import Mtext from "./Mtext";
import PresssabbleText from "./PresssabbleText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children?: React.ReactNode;
};
const Modal = ({ activator: Activator,children }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <DefaultModel
        visible={showModal}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centerView}>
          {children}
          <PresssabbleText text="Close" onPress={() => setShowModal(false)} />
        </View>
      </DefaultModel>
      {Activator ? (
        <Activator handleOpen={() => setShowModal(true)} />
      ) : (
        <PresssabbleText
          text="Check Sequence"
          onPress={() => setShowModal(true)}
        />
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
