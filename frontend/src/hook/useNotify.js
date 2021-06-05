import { useEffect, useState } from 'react';

export default function useNotify({ type, message }) {
  const [isNotifyOpen, setNotifyOpen] = useState(false);

  useEffect(() => {
    setNotifyOpen(true);
    // Hide after 1 sec
    setTimeout(() => {
      setNotifyOpen(false);
    }, 1000);
  }, [type, message]);
  return { isNotifyOpen, type, message };
}
