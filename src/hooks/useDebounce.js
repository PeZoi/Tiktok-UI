import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
   const [debounceValue, setDebounceValue] = useState(value);

   useEffect(() => {
      const hanler = setTimeout(() => setDebounceValue(value), delay);

      return () => clearTimeout(hanler);
   }, [value]);

   return debounceValue;
};

export default useDebounce;
