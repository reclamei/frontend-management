import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrgaoResponsavelRoutingModule } from './orgao-responsavel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ReclamacoesComponent } from './pages/reclamacoes/reclamacoes.component';
import { AbrangenciaComponent } from './pages/abrangencia/abrangencia.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ReclamacoesComponent,
        RelatoriosComponent,
        AbrangenciaComponent
    ],
    imports: [
        CommonModule,
        OrgaoResponsavelRoutingModule,
        SharedModule
    ]
})
export class OrgaoResponsavelModule { }