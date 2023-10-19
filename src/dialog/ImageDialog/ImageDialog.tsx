import { PropsWithChildren } from 'react';
import Dialog from '../Dialog';

type ImageDialogProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

const ImageDialog = ({ isOpen, onCloseClick, children }: PropsWithChildren<ImageDialogProps>): React.JSX.Element => {
  return (
    <>
      <Dialog isOpen={isOpen} onCloseClick={onCloseClick}>
        {children}
      </Dialog>
    </>
  );
};

export default ImageDialog;
