import { deleteDiaryAndSets } from '../../../database/diaries';
import styles from './DeleteButton.module.scss';
import { useState } from 'react';

type DeleteButtonProps = {
  diaryId: number;
};

export default function DeleteButton({ diaryId }: DeleteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      await fetch(`/api/deleteDiary`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ diaryId }),
      });

      // Refresh the diaries list after successful deletion
      // You can refetch the data from the server and re-render the component

      setIsLoading(false);
    } catch (error) {
      console.error('Failed to delete diary entry:', error);
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  );
}

// export function DeleteCartItem(props) {
//   return (
//     <form
//       action={async () => {
//         await deleteCartItem(props.id);
//       }}
//     >
//       <button
//         data-test-id={`cart-product-remove-${props.id}`}
//         className={styles.removeButton}
//       >
//         <Image alt="trash icon" src={trash} width={20} height={20} />
//       </button>
//     </form>
//   );
// }
