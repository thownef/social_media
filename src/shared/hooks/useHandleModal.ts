import { useState, useCallback } from "react";

type HooksHandleModal = {
  modalName: string;
  onSetModalName: React.Dispatch<React.SetStateAction<string>>;
  onResetModal: () => void;
};

const useHandleModal = (): HooksHandleModal => {
  const [modalName, setModalName] = useState<string>("");

  const handleResetModal = useCallback(() => {
    setModalName("");
  }, []);

  return {
    modalName,
    onSetModalName: setModalName,
    onResetModal: handleResetModal,
  };
};

export default useHandleModal;
