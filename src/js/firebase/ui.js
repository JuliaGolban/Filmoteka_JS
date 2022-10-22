import { AuthErrorCodes } from 'firebase/auth';
import getRefs from '../getRefs';
const refs = getRefs();

export const showLoginError = error => {
  refs.divLoginError.style.display = 'block';
  if (error == AuthErrorCodes.INVALID_PASSWORD) {
    refs.lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
  } else {
    refs.lblLoginErrorMessage.classList.remove('is-hidden');
  }
};
