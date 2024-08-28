import { useEffect, useState } from 'react';
import styles from './form-response.module.css'; // Importing the CSS module

interface FormData {
  _id: string; // Ensure MongoDB provides an _id field as a string
  email: string;
  phone: string;
  message: string;
}

const FormResponse = () => {
  const [data, setData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null); // Single ID for deletion

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/form-data');
        if (!response.ok) {
          throw new Error('Terjadi gangguan jaringan');
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (id: string) => {
    setSelectedId(prevSelectedId => prevSelectedId === id ? null : id);
  };

  const handleDelete = async () => {
    if (!selectedId) {
      return; // No item selected for deletion
    }

    try {
      const response = await fetch('/api/delete-form-data', { // Updated endpoint
        method: 'DELETE', // Updated HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: [selectedId] }), // Send ID as an array with one item
      });

      if (!response.ok) {
        throw new Error('Gagal menghapus data');
      }

      // Remove deleted item from the current state
      setData(prevData => prevData.filter(item => item._id !== selectedId));
      setSelectedId(null); // Clear selected ID after deletion
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Respons Formulir Contact</h1>
      <button
        className={styles.deleteButton}
        onClick={handleDelete}
        disabled={!selectedId} // Disable button if no item is selected
      >
        Hapus Terpilih
      </button>
      <ul className={styles.responseList}>
        {data.map((item) => (
          <li
            key={item._id}
            className={`${styles.responseItem} ${selectedId === item._id ? styles.selected : ''}`}
            onClick={() => handleSelect(item._id)}
          >
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{item.message}</h2>
              <p className={styles.cardEmail}><strong>Email:</strong> {item.email}</p>
              <p className={styles.cardPhone}><strong>Phone:</strong> {item.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormResponse;
