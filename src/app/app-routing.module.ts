import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapeamentoRota} from './shared/constants/mapeamento-rota';
import {EntrarComponent} from './pages/entrar/entrar.component';
import {AuthGuard} from './shared/auth/guard/auth-guard';
import {ConcluirCadastroComponent} from './pages/concluir-cadastro/concluir-cadastro.component';

const routes: Routes = [
    { path: MapeamentoRota.ROTA_RAIZ.obterRota(), redirectTo: MapeamentoRota.ROTA_AUTENTICAR.obterRota(), pathMatch: 'full' },
    { path: MapeamentoRota.ROTA_AUTENTICAR.obterRota(), component: EntrarComponent },
    { path: MapeamentoRota.ROTA_CONCLUIR_CADASTRO.obterRota(), component: ConcluirCadastroComponent },
    { path: MapeamentoRota.ROTA_PAINEL_ADMINISTRATIVO.obterRota(), loadChildren: () => import('./modules/orgao-responsavel/orgao-responsavel.module').then((m) => m.OrgaoResponsavelModule), canActivate: [AuthGuard] },
    { path: '**', redirectTo: MapeamentoRota.ROTA_RAIZ.obterRota() },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
