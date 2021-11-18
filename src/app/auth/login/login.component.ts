import { AuthService } from '@data/services/backEnd/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '@data/services/backEnd/auth/myservice.service';
import { CryptoService } from '@shared/services/comunes/crypto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MyserviceService]
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(//private service: MyserviceService,
      private routes: Router,
      private fb: FormBuilder,
      private authService: AuthService,
      private cryptoService: CryptoService,
      private toastr: ToastrService )
  {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
      clave : ['', [Validators.required]]
    });
  }

  validarInput(campo: string){
    return this.formulario.get(campo).invalid && this.formulario.get(campo).touched
  }

  login(){

    if(this.formulario.valid){

      const body = {
        "correo": this.formulario.get("correo").value,
        "clave": this.cryptoService.encriptarHmacSha512(this.formulario.get("clave").value)
      }

      this.authService.autenticarUsuario(body).subscribe( resp => {
        if(resp.success){
          this.toastr.success('Usuario identificado.', 'Éxito!',{closeButton:true});
          localStorage.setItem('datos', this.cryptoService.encriptar(JSON.stringify(resp.content)))
          localStorage.setItem('usuario', resp.content['nombre'] + ', ' + resp.content['apellidoPaterno'])
          //console.log(resp.content['nombre'] + ', ' + resp.content['apellidoPaterno'] )
          this.formulario.reset();
          this.routes.navigate(['/Home']);
        }
      
      });

    }else{
      Object.values(this.formulario.controls).forEach(control => control.markAsTouched() )
      this.toastr.error('Intento de vulneración del sitio web', 'Advertencia!');
    }
  }
}
