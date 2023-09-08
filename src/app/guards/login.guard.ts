import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('userId')) {
    return true;
  }

  alert('sign in first');
  return false;
};
