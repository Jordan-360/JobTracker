import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key)
      return savedValue !== null ? JSON.parse(savedValue) : initialValue
    } catch {
      // Corrupted JSON or storage unavailable (e.g. private mode) — start fresh
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // Storage full or unavailable — state still works for this session
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
