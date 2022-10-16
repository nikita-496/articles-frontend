import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const prevValueRef = useRef(null);

  useEffect(() => {
    prevValueRef.current = value
  })

  return prevValueRef
};

export default usePrevious
