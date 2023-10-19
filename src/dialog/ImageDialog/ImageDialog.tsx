import Dialog from '../Dialog';

import './ImageDialog.css';

type ImageDialogProps = {
  isOpen: boolean;
  title: string;
  imageSrc: string;
  onCloseClick: () => void;
};

const ImageDialog = ({ isOpen, title, imageSrc, onCloseClick }: ImageDialogProps): React.JSX.Element => {
  const header = (): React.JSX.Element => {
    return (
      <div className="image-dialog--header">
        <h2>{title}</h2>
      </div>
    );
  };

  return (
    <Dialog isOpen={isOpen} onCloseClick={onCloseClick} header={header}>
      <img src={imageSrc} alt="" />
    </Dialog>
  );
};

export default ImageDialog;
