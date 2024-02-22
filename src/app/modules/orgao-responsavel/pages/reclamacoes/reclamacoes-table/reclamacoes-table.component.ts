import { Component } from "@angular/core";
import { SelectItem } from "primeng/api";
import { ReclamacaoModel } from "src/app/shared/models/aplicacao/reclamacao.model";
import { StatusReclamacaoEnum } from "src/app/shared/models/aplicacao/status-reclamacao.enum";
import { ReclamacaoService } from "src/app/shared/services/reclamacao.service";

@Component({
    selector: 'app-reclamacoes-table',
    templateUrl: './reclamacoes-table.component.html',
    styleUrls: ['./reclamacoes-table.component.scss']
})

export class ReclamacoesTableComponent {
    public reclamacoes: ReclamacaoModel[] = [];
    public reclamacoesFiltradas: ReclamacaoModel[] = [];
    public modalLocalizacaoVisivel = false;
    public reclamacaoEmFoco: ReclamacaoModel | null = null;
    public centralizarMapa: Record<string, any> = {};
    public ampliacaoMapa: number = 15;
    public configuracaoMapa: google.maps.MapOptions = this.inicializarConfiguracaoMapa();
    public opcoesFiltroReclamacoes: SelectItem<number>[] = this.inicializarOpcoesFiltroReclamacoes();
    public statusReclamacoes: number = 0;
    public mapType = 'roadmap';

    constructor(
        private reclamacaoService: ReclamacaoService
    ) {
        this.reclamacoes = this.reclamacaoService.obterReclamacoes();
        this.filtrarReclamacoes();
    }

    public mostrarLocalizacao(reclamacao: ReclamacaoModel): void {
        this.reclamacaoEmFoco = reclamacao;
        this.centralizarMapa = {lat: this.gerarLocalizacaoColatina(-19.5385576), lng: this.gerarLocalizacaoColatina(-40.636211)};
        this.ampliacaoMapa = 15;
        this.modalLocalizacaoVisivel = true;
    }

    public filtrarReclamacoes(): void {
        if(this.statusReclamacoes === 0) {
            this.reclamacoesFiltradas = [...this.reclamacoes];
        } else {
            this.reclamacoesFiltradas = this.reclamacoes.filter((reclamacao: ReclamacaoModel) => reclamacao.idStatus === this.statusReclamacoes);
        }
    }

    private gerarLocalizacaoColatina(base: number): number {
        return base + ((Math.random() / 100) * (Math.random() > 0.5 ? 1 : -1));
    }

    private inicializarConfiguracaoMapa(): google.maps.MapOptions {
        return {
            streetViewControl: false,
            mapTypeControl: false,
            clickableIcons: true
        };
    }

    private inicializarOpcoesFiltroReclamacoes(): SelectItem<number>[] {
        return [
            { value: 0, label: 'Todas' },
            { value: StatusReclamacaoEnum.RESOLVIDO.getId(), label: StatusReclamacaoEnum.RESOLVIDO.getDescricao() },
            { value: StatusReclamacaoEnum.PENDENTE.getId(), label: StatusReclamacaoEnum.PENDENTE.getDescricao() },
            { value: StatusReclamacaoEnum.PROMESSA.getId(), label: StatusReclamacaoEnum.PROMESSA.getDescricao() },
        ];
    }
}