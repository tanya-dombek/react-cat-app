import { useState, useEffect, useRef } from 'react';
import Controls from './components/Controls';
import CatImage from './components/CatImage';
import Container from './components/Container';

export default function App() {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState('');
  const intervalRef = useRef(null);

  const fetchCat = async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      setCatUrl(data[0].url);
    } catch (e) {
      console.error('Failed to fetch cat:', e);
    }
  };

  useEffect(() => {
    if (enabled && autoRefresh) {
      intervalRef.current = setInterval(() => {
        fetchCat();
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [enabled, autoRefresh]);

  return (
    <Container>
      <Controls
        enabled={enabled}
        setEnabled={setEnabled}
        autoRefresh={autoRefresh}
        setAutoRefresh={setAutoRefresh}
        onClick={fetchCat}
      />
      {catUrl && <CatImage imageUrl={catUrl} />}
    </Container>
  );
}
