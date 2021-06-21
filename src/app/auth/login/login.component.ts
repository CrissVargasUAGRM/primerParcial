import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private formLogin: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(): void{
    this.form = this.formLogin.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(): void{
    if(this.form.valid){
      const username = this.form.value.username;
      const password = this.form.value.password;
      this.loading = true;
      this.userService.loginUser(username, password).subscribe((res: any) => {
        localStorage.setItem('token', JSON.stringify(res.token));
        this.loading = false;
        this.router.navigateByUrl('/client/home');
      });

    }else{
      console.log("Formulario no valido")
    }
  }

  inputInvalid(campo: string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

}
