import { PropsWithChildren } from 'react';

import './Dialog.css';

type DialogProps = PropsWithChildren<{
  display: boolean;
  modal?: boolean;
  header?: React.FC;
  footer?: React.FC;
}>;

const Dialog = ({
  display,
  modal = false,
  header: Header = DefaultHeader,
  footer: Footer = DefaultFooter,
  children,
}: DialogProps): React.JSX.Element => {
  if (!display) return <></>;

  return (
    <div>
      <div role="dialog">
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
