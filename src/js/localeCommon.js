function saveToStorage(storageKey, dataToSave) {
  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
}

function getFromStorage(storageKey) {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    return data;
  } catch (err) {
    console.warn('Cannot parse JSON from localStorage');
    return null;
  }
}

function removeItem(storageKey) {
  localStorage.removeItem(storageKey);
}

function clearData() {
  localStorage.clear();
}

export { clearData, getFromStorage, saveToStorage, removeItem };
