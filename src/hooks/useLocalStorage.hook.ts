import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T[]) {
  // Estado para almacenar el array
  const [storedValue, setStoredValue] = useState<T[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Función para agregar un nuevo objeto al array
  const addValue = (newValue: T) => {
    setStoredValue((prevValues) => {
      const updatedValues = [...prevValues, newValue];
      // Guarda el nuevo array en localStorage
      window.localStorage.setItem(key, JSON.stringify(updatedValues));
      return updatedValues;
    });
  };

  // Función para limpiar el array
  const clear = () => {
    setStoredValue([]);
    window.localStorage.removeItem(key);
  };

  // Efecto para sincronizar el estado con localStorage
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  return { storedValue, addValue, clear };
}

export default useLocalStorage;
