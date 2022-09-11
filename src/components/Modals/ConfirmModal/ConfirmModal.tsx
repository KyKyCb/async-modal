import React, { FC } from "react";
import { CloseIcon } from "../../../assets/svgComponents";
import { ModalProps } from "../../../constants/types";
import { Modal } from "../Modal";

import "./ConfirmModal.scss";

interface IConfirmModal extends ModalProps {
  res: (value: boolean) => void;
  rej: () => void;
}

export const ConfirmModal: FC<IConfirmModal> = ({
  visible,
  setVisible,
  res,
  rej,
}) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div
        className={
          visible ? "confirm__modal__content active" : "confirm__modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="confirm__modal__content__close-logo"
          onClick={setVisible}
        >
          <CloseIcon />
        </div>

        <div className="confirm__modal__content__container">
          <div className="confirm__modal__content__form">
            <div className="confirm__modal__content__form__element">
              <h3>Are you sure you want to confirm transaction?</h3>
            </div>
            <div className="confirm__modal__content__form__element">
              <button
                onClick={() => {
                  setVisible();
                  res(true);
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setVisible();
                  rej();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
