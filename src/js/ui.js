import { AuthErrorCodes } from 'firebase/auth';
import getRefs from './getRefs';
const refs = getRefs();

export const showLoginForm = () => {
  login.style.display = 'block'
  app.style.display = 'none'  
}

// export const showApp = () => {
//   login.style.display = 'none'
//   app.style.display = 'block'
// }

export const hideLoginError = () => {
  refs.divLoginError.style.display = 'none'
  refs.lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  refs.divLoginError.style.display = 'block'    
  if (error == AuthErrorCodes.INVALID_PASSWORD) {
    refs.lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
  }
  // else {
  //   lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
  // }
}

export const showLoginState = (user) => {
  refs.lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
}

hideLoginError()