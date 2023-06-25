'use client';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddDiaryEntryForm from './AddDiaryEntryForm';
import styles from './AddDiaryEntryModal.module.scss';

export default function AddDiaryEntryModal({ exercises, user }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      triggerComponent={<button className={styles.button}>Add to diary</button>}
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
