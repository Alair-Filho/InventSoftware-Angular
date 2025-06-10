import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Equipamento } from '@app/models/equipamento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-equipamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-equipamento.component.html',
  styleUrl: './formulario-equipamento.component.css'
})
export class FormularioEquipamentoComponent {
  @Input() equipamento: Equipamento = {
    id: '', nome: '', tipo: '',
    quantidadeEmEstoque: 0,
    dataDeinclusao: ''
  };
  @Output() salvar = new EventEmitter<Equipamento>();

  enviar() {
    this.salvar.emit(this.equipamento);
  }

}
