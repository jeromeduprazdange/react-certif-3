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
        <button className="image-dialog--close-btn" onClick={onCloseClick}>
          &times;
        </button>
      </div>
    );
  };

  return (
    <Dialog isOpen={isOpen} header={header}>
      <img className="image-dialog--img" src={imageSrc} alt={title} />
    </Dialog>
  );
};

export default ImageDialog;
