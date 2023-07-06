'use client';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddDiaryEntryForm from './AddDiaryEntryForm';
import styles from './AddDiaryEntryModal.module.scss';

interface AddDiaryEntryModalProps {
  exercises: any[];
  user: {
    id: string;
  };
}

export default function AddDiaryEntryModal({
  exercises,
  user,
}: AddDiaryEntryModalProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      triggerComponent={
        <button data-test-id="add-to-diary-button" className={styles.button}>
          Add to diary
        </button>
      }
      setOpenCustom={setOpenModal}
      openCustom={openModal}
      modalBody={
        <AddDiaryEntryForm
          exercisesList={exercises}
          userId={user?.id}
          setOpenCustom={setOpenModal}
        />
      }
    />
  );
}
