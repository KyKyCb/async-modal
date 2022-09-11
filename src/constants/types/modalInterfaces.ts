import { ReactNode } from 'react';

export interface ModalProps {
  visible: boolean;
  setVisible: () => void;
  children?: ReactNode;
}
