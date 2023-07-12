'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

export default function ImageUpload() {
  const [file, setFile] = useState('/images/profile-user.png');

  const handleFileChange = (event: any) => {
    const uploadedFile = event.currentTarget.files[0];
    const fileURL = URL.createObjectURL(uploadedFile);
    setFile(fileURL);
  };

  return (
    <main>
      <div className={styles.imageUploadContainer}>
        <form>
          <Image
            className={styles.userImage}
            alt="user"
            src={file}
            width={200}
            height={200}
          />
        </form>
        <input
          type="file"
          name="upload"
          accept="image/*"
          id="input-file"
          onChange={handleFileChange}
        />

        <label htmlFor="input-file">Update Image</label>
      </div>
    </main>
  );
}
