import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterCreds, User } from '../../../Types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  //membersFromHome = input.required<User[]>(); //Cosi passo lower parameters da component padre a figlio

  private accountService = inject(AccountService)

  cancelRegister = output<boolean>();

  protected creds = {} as RegisterCreds;

  register() {
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel(); //torna prima
      },
      error: error=> console.log(error)
    })
  }

  //manda al componente di prima il cancel register per fare set del show register a false
  cancel() {
    this.cancelRegister.emit(false)
  }

}
