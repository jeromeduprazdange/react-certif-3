import { useState } from 'react';
import Dialog from './Dialog';

const DialogDemo = (): React.JSX.Element => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const toggleDialogHandler = () => {
    setDisplayModal(false);
    setDisplayDialog(!displayDialog);
  };

  const openModalHandler = () => {
    setDisplayModal(true);
  };

  return (
    <div>
      <Dialog isOpen={displayDialog}>Dialog</Dialog>
      <Dialog isOpen={displayModal} isModal={true}>
        Dialog modal
      </Dialog>
      <button type="button" onClick={toggleDialogHandler}>
        Toggle dialog
      </button>
      <button type="button" onClick={openModalHandler}>
        Open modal
      </button>
    </div>
  );
};

export default DialogDemo;
