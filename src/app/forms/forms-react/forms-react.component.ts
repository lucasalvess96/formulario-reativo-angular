import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-react',
  templateUrl: './forms-react.component.html',
  styleUrls: ['./forms-react.component.css']
})
export class FormsReactComponent implements OnInit {
  formCadastro!: FormGroup;

  dataform: [] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Za-z]+[A-Za-z ])*$')]],
      cpf: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern('')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      contact: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      confPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]]
    }, {validator: this.checkPasswords});
  }

  registerUser(): void{
    if(this.formCadastro.valid){
      this.dataform = this.formCadastro.value;
      
      console.table(this.dataform);

      window.alert(`Bem vindo`);

      this.router.navigate(['/']);
    }
  }

  resetForm(): void{
    this.formCadastro.reset();
  }

  checkPasswords(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confPassword'].value ? null : {'mismatch': true};
  }
 
  get passwordHandle() { return this.formCadastro.get('password')!; }
  
  /**
   * remove caracter especial 
  **/
  specialChar(event: any){   
    var k = event.charCode;

    var keyCode = (event.keyCode ? event.keyCode : event.which);

    if (keyCode > 47 && keyCode < 58) { event.preventDefault(); }

    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57 ));

  }


}
