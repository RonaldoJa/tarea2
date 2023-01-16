import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {cedula: string,nombres:string,apellidos:string,direccion:string,edad:string,id:number},private router: Router, private dialogRef: MatDialogRef<EditarClienteComponent>) {
   }


  ngOnInit(): void {
  }

  usuarioEditado = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioEditado.value.cedula,
        nombres: this.usuarioEditado.value.nombres,
        apellidos: this.usuarioEditado.value.apellidos,
        direccion: this.usuarioEditado.value.direccion,
        edad: this.usuarioEditado.value.edad
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}

