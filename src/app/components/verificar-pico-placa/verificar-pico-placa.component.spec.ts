import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPicoPlacaComponent } from './verificar-pico-placa.component';

describe('VerificarPicoPlacaComponent', () => {
  let component: VerificarPicoPlacaComponent;
  let fixture: ComponentFixture<VerificarPicoPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarPicoPlacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarPicoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
