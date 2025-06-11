import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '@app/services/equipamento.service';
import { CommonModule } from '@angular/common';
import { Equipamento } from '@app/models/equipamento';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './equipamentos.component.html',
  styleUrl: './equipamentos.component.css',
})
export class EquipamentosComponent implements OnInit {
  equipamentos: Equipamento[] = [];

  // Controla o equipamento que está sendo criado ou editado
  novoEquipamento: Equipamento = {
    nome: '',
    tipo: '',
    quantidadeEstoque: 0,
    dataInclusao: ''
  };

  // Controle do estado de edição
  editando: boolean = false;
  idEditando: string | null = null;

  constructor(private equipamentoService: EquipamentoService) {}

  ngOnInit(): void {
    this.carregarEquipamentos();
  }

  carregarEquipamentos(): void {
    this.equipamentoService.getTodos().subscribe({
      next: (dados) => this.equipamentos = dados,
      error: (error) => console.error('Erro ao carregar:', error)
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

  criarEquipamento(): void {
    this.equipamentoService.criar(this.novoEquipamento).subscribe({
      next: () => {
        this.carregarEquipamentos();
        this.limparFormulario();
      },
      error: (error) => console.error('Erro ao criar equipamento:', error)
    });
  }

  // Começa a editar o equipamento (carrega os dados no formulário)
  editarEquipamento(equip: Equipamento) {
    this.novoEquipamento = { ...equip };
    this.editando = true;
    this.idEditando = equip.id!;
  }

  // Atualiza o equipamento via serviço
  atualizarEquipamento(): void {
    if (!this.idEditando) return;

    this.equipamentoService.atualizar(this.idEditando, this.novoEquipamento).subscribe({
      next: () => {
        this.carregarEquipamentos();
        this.limparFormulario();
      },
      error: (error) => console.error('Erro ao atualizar equipamento:', error)
    });
  }

  // Limpa o formulário e reseta o estado de edição
  limparFormulario() {
    this.novoEquipamento = {
      nome: '',
      tipo: '',
      quantidadeEstoque: 0,
      dataInclusao: ''
    };
    this.editando = false;
    this.idEditando = null;
  }
}
