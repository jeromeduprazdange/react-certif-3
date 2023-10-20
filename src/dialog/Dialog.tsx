import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import './Dialog.css';

type DialogProps = PropsWithChildren<{
  isOpen: boolean;
  isModal?: boolean;
  header?: React.FC;
  footer?: React.FC;
  onCloseClick?: () => void;
}>;

const Dialog = ({
  isOpen,
  isModal = false,
  header: Header = DefaultHeader,
  footer: Footer = DefaultFooter,
  onCloseClick,
  children,
}: DialogProps): React.JSX.Element | null => {
  if (!isOpen) return null;

  const onCloseClickHandler = (): void => {
    if (isModal && onCloseClick) {
      onCloseClick();
    }
  };

  const dialogContent: React.JSX.Element = (
    <>
      {isModal && <div className="dialog-backdrop" onClick={onCloseClickHandler} />}
      <div className="dialog" role="dialog" aria-modal={isModal}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );

  return ReactDOM.createPortal(dialogContent, document.body);
};

export default Dialog;

const DefaultHeader = (): React.JSX.Element => {
  return <></>;
};

const DefaultFooter = (): React.JSX.Element => {
  return <></>;
};
