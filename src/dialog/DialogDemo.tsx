import { useState } from 'react';
import Dialog from './Dialog';
import ImageDialog from './ImageDialog/ImageDialog';
import ConfirmModal from './ConfirmModal/ConfirmModal';

const DialogDemo = (): React.JSX.Element => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

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
  };

  return (
    <section>
      <h1>Dialog Demo</h1>
      <ImageDialog
        isOpen={displayDialog}
        title="My beautiful image"
        imageSrc="src/assets/space.jpg"
        onCloseClick={closeDialogHandler}
      />
      <ConfirmModal isOpen={displayModal} onCloseClick={closeModalHandler}>
        question
      </ConfirmModal>
      <button type="button" onClick={toggleDialogHandler}>
        Toggle image dialog
      </button>
      <button type="button" onClick={openModalHandler}>
        Open confirm modal
      </button>
    </section>
  );
};

export default DialogDemo;
