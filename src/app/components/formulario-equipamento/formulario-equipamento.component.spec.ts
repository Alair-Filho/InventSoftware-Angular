import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEquipamentoComponent } from './formulario-equipamento.component';

describe('FormularioEquipamentoComponent', () => {
  let component: FormularioEquipamentoComponent;
  let fixture: ComponentFixture<FormularioEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEquipamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
