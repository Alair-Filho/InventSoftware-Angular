export interface Equipamento {
    id?: string;
    nome: string;
    tipo: string;
    quantidadeEstoque: number;
    dataInclusao: string;
    temEstoque?: boolean;
}
