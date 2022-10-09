import { getResponse } from './api-common';
import getRefs from './getRefs';
import ls from './localeStorage';
const refs = getRefs();

const storageKey = 'movies';

function saveToStorage(dataToSave) {
  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
}

function getFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    return data;
  } catch (err) {
    console.warn('Cannot parse JSON from localStorage');
    return null;
  }
}

function clearData() {
  localStorage.clear();
}

export { clearData, getFromStorage, saveToStorage };
