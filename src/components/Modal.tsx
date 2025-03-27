import * as React from "react";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "../components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={clsx(
          "relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg",
          className,
        )}
      >
        <CloseButton className="absolute top-2 right-2" onClick={onClose} />

        {title && (
          <h2 className="mb-4 text-center text-lg font-semibold">{title}</h2>
        )}

        <div>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}
