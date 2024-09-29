import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import Button from "./Button";
interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onConfirm: () => void;  
}

const DeleteModal =({ isOpen, setIsOpen, onConfirm }:IProps)=>{
    return(
        <>
       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-sm " >
        <div className="flex min-h-full items-center justify-center ">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold text-red-700">Delete Product</DialogTitle>
            <Description>Are you sure you want to delete this product? This action cannot be reversed.</Description>
            <div className="flex gap-4">
              <Button width="w-full" className="bg-stone-400" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button
              width="w-full" className="bg-red-700"
                onClick={() => {
                  onConfirm();
                  setIsOpen(false); 
                }}
              >
                Delete
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
        </>
    )
}
export default DeleteModal