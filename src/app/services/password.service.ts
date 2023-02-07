import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  // ici fonction pour vérifier que pwd et confirmpwd sont identiques
  public verify(): ValidatorFn {
    return (formGroup: FormGroup) => {
      // on cherche pasword et confirmpassword
      const pwd = formGroup.get('pwd').value;
      const pwdConfirm = formGroup.get('pwdConfirm').value;
      try {
        // console.log(typeof(pwd.length), 'pwd');
        if (!pwd || !pwdConfirm) {
          console.log('inside improper');
          return { improperLength: true };
        }

        //console.log(pwd.value);

        if (pwd !== pwdConfirm) {
          // retourner une erreur
          return { verifyPassword: true };
        }

        // pwdConfirm = pwdConfirm?.value.trim();
        // pwd = pwd.value?.trim();
        return null;
      } catch (error) {
        console.log(error);
        return { improperLength: true };
      }
    };
  }
}
