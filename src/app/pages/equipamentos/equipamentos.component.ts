import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '@app/services/equipamento.service';
import { CommonModule } from '@angular/common';
import { Equipamento } from '@app/models/equipamento';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-equipamentos',
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './equipamentos.component.html',
  styleUrl: './equipamentos.component.css',
  
})
export class EquipamentosComponent implements OnInit {
  equipamentos: Equipamento[] = [];

  constructor(private equipamentoService : EquipamentoService) {}

  ngOnInit(): void {
    this.carregarEquipamentos();
  }

  carregarEquipamentos(): void {
    this.equipamentoService.getTodos().subscribe({
      next: (dados) => this.equipamentos = dados,
      error: (error) => console.error('erro ao carregar:', error)
    });
  }

  deletar(id: string) {
  const confirmacao = confirm("Tem certeza que deseja excluir este equipamento?");
  if (confirmacao) {
    this.equipamentoService.deletar(id).subscribe(() => {
      this.carregarEquipamentos();
      });
    }
  }
}
