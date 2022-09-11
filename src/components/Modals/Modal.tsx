import React, { FC } from 'react';
import { useEffect } from 'react';
import { ModalProps } from '../../constants/types';

import './Modal.scss';

export const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
  useEffect(() => {
    if (visible) {
      const body = document.querySelector('body');
      if (
        (body && body.style.overflowY === 'scroll') ||
        (body && !body.style.overflowY)
      ) {
        body.style.overflowY = 'hidden';

        return () => {
          body.style.overflowY = 'scroll';
        };
      }
    }
  }, [visible]);
  return (
    <div className={visible ? 'modal active' : 'modal'} onClick={setVisible}>
      {children}
    </div>
  );
};