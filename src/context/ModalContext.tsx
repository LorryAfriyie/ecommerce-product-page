import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ModalContext = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

type ModalContextType = {
  children: ReactNode;
};

const ModalContext = createContext({} as ModalContext);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalContextType) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}
