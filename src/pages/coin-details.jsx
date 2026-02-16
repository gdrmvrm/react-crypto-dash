import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const API_URL = import.meta.env.VITE_API_COIN_URL;

const CoinDetailsPage = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error('Failed to fetch coin details');
        const data = await res.json();
        console.log(data);
        setCoin(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return <div>coin details {id}</div>;
};

export default CoinDetailsPage;
