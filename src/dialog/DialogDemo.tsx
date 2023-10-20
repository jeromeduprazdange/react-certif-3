import { useState } from 'react';
import ImageDialog from './ImageDialog/ImageDialog';
import ConfirmModal from './ConfirmModal/ConfirmModal';

import './DialogDemo.css';

const DialogDemo = (): React.JSX.Element => {
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [isModalConfirmed, setIsModalConfirmed] = useState<boolean | null>(null);

  const toggleDialogHandler = (): void => {
    setDisplayModal(false);
    setDisplayDialog(!displayDialog);
  };

  const closeDialogHandler = (): void => {
    setDisplayDialog(false);
  };

  const openModalHandler = (): void => {
    setDisplayModal(true);
  };

  const closeModalHandler = (): void => {
    setDisplayModal(false);
    setIsModalConfirmed(null);
  };

  const confirmModalHandler = (): void => {
    setDisplayModal(false);
    setIsModalConfirmed(true);
  };

  const cancelModalHandler = (): void => {
    setDisplayModal(false);
    setIsModalConfirmed(false);
  };

  return (
    <section className="dialog-demo">
      <h1>Dialog demo</h1>
      <ImageDialog
        isOpen={displayDialog}
        title="My beautiful image"
        imageSrc="src/assets/space.jpg"
        onCloseClick={closeDialogHandler}
      />
      <ConfirmModal
        isOpen={displayModal}
        onCloseClick={closeModalHandler}
        onConfirmClick={confirmModalHandler}
        onCancelClick={cancelModalHandler}
      >
        Are you sure you want to do this?
      </ConfirmModal>
      <button type="button" onClick={toggleDialogHandler}>
        Toggle image dialog
      </button>
      <button type="button" onClick={openModalHandler}>
        Open confirm modal
      </button>
      {isModalConfirmed !== null && <p>isModalConfirmed : {isModalConfirmed.toString()}</p>}
    </section>
  );
};

export default DialogDemo;
