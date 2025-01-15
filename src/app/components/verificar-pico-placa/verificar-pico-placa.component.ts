import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PicoPlacaService } from 'src/app/services/pico-placa.service';

@Component({
  selector: 'app-verificar-pico-placa',
  templateUrl: './verificar-pico-placa.component.html',
  styleUrls: ['./verificar-pico-placa.component.scss']
})
export class VerificarPicoPlacaComponent {
  formulario: FormGroup;
  resultado: string | null = null;

  constructor(private fb: FormBuilder, private picoPlacaService: PicoPlacaService) {
    this.formulario = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern('^[A-Z]{3}-[0-9]{3,4}$')]], 
      fechaHora: ['', Validators.required], 
    });
  }

  transformarPlaca(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value.toUpperCase(); 
  
    valor = valor.replace(/[^A-Z0-9-]/g, '');
  
    let letras = valor.split('-')[0].replace(/[^A-Z]/g, ''); 
    let numeros = valor.split('-')[1]?.replace(/[^0-9]/g, '') || '';
  
    letras = letras.substring(0, 3);
  
    numeros = numeros.substring(0, 4);
  
    valor = letras;
    if (letras.length === 3) {
      valor += '-' + numeros;
    }
  
    this.formulario.get('placa')?.setValue(valor, { emitEvent: false });
  }
  
  
  verificarPicoPlaca() {
    if (this.formulario.valid) {
      const { placa, fechaHora } = this.formulario.value;
  
      const timestamp = new Date(fechaHora).getTime(); 
  
      this.picoPlacaService.verificar({ placa, timestamp }).subscribe({
        next: (response) => {
          this.resultado = response;
        },
        error: (err) => {
          console.error('Error al consultar la API:', err);
          this.resultado = 'Error al consultar la API.';
        },
      });
    } else {
      this.resultado = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
