import { PropsWithChildren } from 'react';
import Dialog from '../Dialog';

type ConfirmModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

const ConfirmModal = ({ isOpen, onCloseClick, children }: PropsWithChildren<ConfirmModalProps>): React.JSX.Element => {
  return (
    <Dialog isOpen={isOpen} isModal={true} onCloseClick={onCloseClick}>
      {children}
    </Dialog>
  );
};

export default ConfirmModal;
