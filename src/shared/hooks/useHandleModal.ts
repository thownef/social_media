import { useState, useCallback } from "react";

type HooksHandleModal = {
  modalName: string;
  onOpenModal: (name: string) => () => void;
  onResetModal: () => void;
};

const useHandleModal = (): HooksHandleModal => {
  const [modalName, setModalName] = useState<string>("");

  const handleResetModal = useCallback(() => {
    setModalName("");
  }, []);

  const handleOpenModal = useCallback((name: string) => {
    return () => {
      setModalName(name);
    };
  }, []);

  return {
    modalName,
    onOpenModal: handleOpenModal,
    onResetModal: handleResetModal,
  };
};

export default useHandleModal;
