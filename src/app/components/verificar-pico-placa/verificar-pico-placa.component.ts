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
      placa: ['', [Validators.required, Validators.pattern('^[A-Z]{3}-[0-9]{3,4}$')]], // Ajusta el patrón según tu formato de placa
      fechaHora: ['', Validators.required], // Campo único para fecha y hora
    });
  }
  
  verificarPicoPlaca() {
    if (this.formulario.valid) {
      const { placa, fechaHora } = this.formulario.value;
  
      // Convertir fechaHora a timestamp
      const timestamp = new Date(fechaHora).getTime(); // Convertir a timestamp
  
      // Llamar al servicio
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
