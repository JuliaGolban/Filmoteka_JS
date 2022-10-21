import { initializeApp } from 'firebase/app';

import { showLoginError } from './ui';

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import getRefs from '../getRefs';
import throttle from 'lodash.throttle';
const refs = getRefs();

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBVMv6pSZ2U-cejy2sHQZK-lu1fM1skatI',
  authDomain: 'auth-form-c032e.firebaseapp.com',
  projectId: 'auth-form-c032e',
  storageBucket: 'auth-form-c032e.appspot.com',
  messagingSenderId: '631345881209',
  appId: '1:631345881209:web:0b819b68909f7ff5c634a8',
  measurementId: 'G-J0W5VCW7RT',
});
const auth = getAuth(firebaseApp);

const loginEmailPassword = async e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  if (!email && !password) {
    return showLoginError();
  } else {
    closeModal();

    refs.registIcon.classList.add('is-hidden');
    refs.enterIcon.classList.remove('is-hidden');

    refs.backdropNotification.classList.remove('is-hidden');
    refs.successEnter.classList.remove('is-hidden');

    setTimeout(() => {
      refs.backdropNotification.classList.add('is-hidden');
      refs.successEnter.classList.add('is-hidden');
    }, 2000);
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

const createAccout = async e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  console.log(email, password);
  if (!email && !password) {
    return showLoginError();
  }
  closeModal();

  refs.registIcon.classList.add('is-hidden');
  refs.enterIcon.classList.remove('is-hidden');

  refs.backdropNotification.classList.remove('is-hidden');
  refs.successEnter.classList.remove('is-hidden');

  setTimeout(() => {
    refs.backdropNotification.classList.add('is-hidden');
    refs.successEnter.classList.add('is-hidden');
  }, 2000);

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    showLoginError(err);
  }
};

function closeModal() {
  refs.modalUser.classList.toggle('is-hidden');
}

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // showApp();
      // showLoginState(user);
      // hideLoginError();
    }
    // else {
    //     // showLoginForm()
    //     refs.lblAuthState.innerHTML = `You're not logged in.`;
    // }
  });
};

const logout = async () => {
  window.location.reload();
};

refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignup.addEventListener('click', createAccout);
refs.btnLogout.addEventListener('click', logout);

monitorAuthState();
