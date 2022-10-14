import { initializeApp } from 'firebase/app';

import {
    hideLoginError,
    showLoginState,
    // showLoginForm,
    // showApp,
    showLoginError,
} from './ui';

import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // connectAuthEmulator
} from 'firebase/auth';

import getRefs from './getRefs';
const refs = getRefs();

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVMv6pSZ2U-cejy2sHQZK-lu1fM1skatI",
    authDomain: "auth-form-c032e.firebaseapp.com",
    projectId: "auth-form-c032e",
    storageBucket: "auth-form-c032e.appspot.com",
    messagingSenderId: "631345881209",
    appId: "1:631345881209:web:0b819b68909f7ff5c634a8",
    measurementId: "G-J0W5VCW7RT"
});
const auth = getAuth(firebaseApp);

const loginEmailPassword = async (e) => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    if (!email && !password) {
        return showLoginError();
    }
    refs.successEnter.classList.remove('is-hidden');
    refs.formSuccessMsg.classList.add('is-hidden');
    refs.formTitle.classList.remove('modal-login-title');
    refs.formTitle.classList.add('is-hidden');
    refs.btnLogout.classList.remove('is-hidden');


    try {
        await signInWithEmailAndPassword(auth, email, password);

    }
    catch (error) {
        console.log(`There was an error: ${error}`);
        showLoginError(error);
    }
}

const createAccout = async (e) => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    console.log(email, password);
    // debugger;
    if (!email && !password) {
        return showLoginError();
    }
    refs.successEnter.classList.remove('is-hidden');
    refs.formSuccessMsg.classList.add('is-hidden');
    refs.formTitle.classList.remove('modal-login-title');
    refs.formTitle.classList.add('is-hidden');
    // refs.btnLogout.classList.remove('is-hidden');
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.log(err);
        showLoginError(err);
    }
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            // showApp();
            showLoginState(user);

            hideLoginError();
        }
        else {
            // showLoginForm()
            refs.lblAuthState.innerHTML = `You're not logged in.`;
        }
    })
}

const logout = async () => {
    await signOut(auth);
    window.location.reload();
}

// const logOutFromForm = async () =>{
//     while
// }
refs.btnLogin.addEventListener("click", loginEmailPassword);
refs.btnSignup.addEventListener("click", createAccout);
refs.btnLogout.addEventListener('click', logout);
// refs.openModalUserBtn.addEventListener('click', logOutFromForm);

monitorAuthState();
