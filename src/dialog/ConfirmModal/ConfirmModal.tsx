import { PropsWithChildren } from 'react';
import Dialog from '../Dialog';

import './ConfirmModal.css';

type ConfirmModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
  onConfirmClick: () => void;
  onCancelClick: () => void;
};

const ConfirmModal = ({
  isOpen,
  onCloseClick,
  onConfirmClick,
  onCancelClick,
  children,
}: PropsWithChildren<ConfirmModalProps>): React.JSX.Element => {
  const footer = (): React.JSX.Element => {
    return (
      <div className="confirm-modal--footer">
        <button onClick={onCancelClick}>Cancel</button>
        <button onClick={onConfirmClick}>Confirm</button>
      </div>
    );
  };

  return (
    <Dialog isOpen={isOpen} isModal={true} footer={footer} onCloseClick={onCloseClick}>
      {children}
    </Dialog>
  );
};

export default ConfirmModal;
