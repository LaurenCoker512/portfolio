import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-card rounded-lg p-4 max-w-3xl w-full relative">
        <button
          className="absolute top-2 right-2 text-muted hover:text-primary text-lg cursor-pointer"
          onClick={onClose}
          aria-label="Close video modal"
        >
          <X />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
