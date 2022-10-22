/**
 * Saves given data, replaces old data with the new
 * @param {string} storageKey - key to save data
 * @param {Object|Object[]} dataToSave data we need to save
 */

function saveToStorage(storageKey, dataToSave) {
  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
}

/**
 * Returns all data from the storage
 * @param {string} storageKey - key to returns data
 * @returns {Object} parsed data from storage
 */

function getFromStorage(storageKey) {
  try {
    const data = localStorage.getItem(storageKey);
    return data === null ? undefined : JSON.parse(data);
  } catch (err) {
    console.warn('Cannot parse JSON from localStorage');
    return null;
  }
}

/**
 * Clears some array of the data in the storage by key
 * @param {string} storageKey - key to remove the data
 */

function removeItem(storageKey) {
  localStorage.removeItem(storageKey);
}

/**
 * Clears all the data in the storage
 */

function clearData() {
  localStorage.clear();
}

export { clearData, getFromStorage, saveToStorage, removeItem };
