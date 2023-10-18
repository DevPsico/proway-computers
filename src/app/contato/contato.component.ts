import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
  //Variável que vai validar os campos do FORM
  formContato!: FormGroup;   

  constructor(
    private formBuilder: FormBuilder
  ){ }
  ngOnInit(): void {
    this.formContato = this.formBuilder.group({
      nome: ["", [
        Validators.minLength(4),
        Validators.required,
      ]],
      assunto: ["", [
        Validators.minLength(10),
        Validators.required
      ]],
      telefone: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]],      
    });     
  }
  enviarFormulario(){
    window.alert("A mensagem foi enviada !");
    this.formContato.reset();      
  }
}