import { PropsWithChildren } from 'react';

import './Dialog.css';

type DialogProps = PropsWithChildren<{
  isOpen: boolean;
  isModal?: boolean;
  header?: React.FC;
  footer?: React.FC;
}>;

const Dialog = ({
  isOpen,
  isModal = false,
  header: Header = DefaultHeader,
  footer: Footer = DefaultFooter,
  children,
}: DialogProps): React.JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className={isModal ? 'dialog backdrop' : 'dialog'}>
      <div className="dialog" role="dialog" aria-modal={isModal}>
        <div className="dialog-header">
          <Header />
        </div>
        {children}
        <div className="dialog-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dialog;

const DefaultHeader = (): React.JSX.Element => {
  return <></>;
};

const DefaultFooter = (): React.JSX.Element => {
  return <></>;
};
