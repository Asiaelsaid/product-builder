import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
}

const Modal: React.FC<IProps> = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-sm">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            {title && <DialogTitle className="font-bold">{title}</DialogTitle>}
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
