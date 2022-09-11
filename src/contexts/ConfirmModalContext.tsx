import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ConfirmModal } from "../components";

const ConfirmModalContext = createContext({
  state: false,
  openModal: async () => true,
  closeModal: () => {},
});

const ConfirmModalContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);
  const [promiseFunctions, setPromiseFunctions] = useState<{
    res: (value: boolean) => void;
    rej: () => void;
  }>({
    res: () => {},
    rej: () => {},
  });

  const openModal = async () => {
    return new Promise<boolean>(async (res, rej) => {
      setPromiseFunctions({ res, rej });
      setActive(true);
    });
  };
  const closeModal = () => {
    setActive(false);
  };

  useEffect(() => {
    if (promiseFunctions) {
      console.log(promiseFunctions);
    }
  }, [promiseFunctions]);

  return (
    <ConfirmModalContext.Provider value={{ state: active, openModal, closeModal }}>
      {children}
      <ConfirmModal
        res={promiseFunctions.res}
        rej={promiseFunctions.rej}
        visible={active}
        setVisible={closeModal}
      />
    </ConfirmModalContext.Provider>
  );
};

export { ConfirmModalContext, ConfirmModalContextProvider };
