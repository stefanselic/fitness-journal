'use client';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export default function Modal({
  triggerComponent,
  modalBody,
  openCustom,
  setOpenCustom,
}: {
  triggerComponent: ReactNode;
  modalBody: ReactNode;
  openCustom?: boolean;
  setOpenCustom?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog.Root open={openCustom} onOpenChange={setOpenCustom}>
      <Dialog.Trigger asChild>{triggerComponent}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.body}>
          {modalBody}
          <Dialog.Close className={styles.CloseIcon}>
            <X style={{ width: '20px', height: '20px' }} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
