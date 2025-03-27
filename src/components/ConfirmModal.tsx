import { Modal, Button } from "../components";

type ConfirmModalProps = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export default function ConfirmModal({
  title = "",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isOpen,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 text-center">
        <p className="text-sm font-semibold text-slate-700">{message}</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            label={cancelText}
            variant="secondary"
            onClick={() => {
              onCancel?.();
              onClose();
            }}
          />
          <Button
            label={confirmText}
            variant="primary"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
