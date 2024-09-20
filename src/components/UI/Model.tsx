import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import Button from "./Button";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
}

const Model: React.FC<IProps> = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            {title && <DialogTitle className="font-bold">{title}</DialogTitle>}
            {children}
            <div className="flex gap-4">
              <Button onClick={() => setIsOpen(false)} className="bg-blue-500">
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)} className="bg-gray-500">
                Submit
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Model;
