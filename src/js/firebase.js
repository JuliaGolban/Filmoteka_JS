import { initializeApp } from 'firebase/app';

import {
    hideLoginError,
    showLoginState,
    // showLoginForm,
    showApp,
    showLoginError,
    btnLogin,
    btnSignup,
    btnLogout
} from './ui';

import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator
} from 'firebase/auth';

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

const loginEmailPassword = async () => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    try {
        const userData = await signInWithEmailAndPassword(auth, email, password);

    }
    catch (err) {
        console.log(err);
        showLoginError(err);
    }
}

const createAccout = async () => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    try {
        const userData = await createUserWithEmailAndPassword(auth, email, password);

    }
    catch (err) {
        console.log(err);
        showLoginError(err);
    }
}

const monitorAuthState = async () =>{
    onAuthStateChanged(auth, user => {
        if(user){
            console.log(user);
            showApp();
            showLoginState(user);
            hideLoginError();
        }

        else{
            showLoginError();
            lblAuthState.innerHTML = `You're not logged in.`;
        }
    });
}

btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccout);

monitorAuthState();

const logout = async  () =>{
    await signOut(auth);
}

btnLogout.addEventListener('click', logout);