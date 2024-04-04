import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './pages/app/app.component';
import {EntrarComponent} from './pages/entrar/entrar.component';
import {HomeComponent} from './modules/orgao-responsavel/pages/home/home.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {environment} from '../environments/environment';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './shared/auth/interceptor/token-interceptor';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthGuardModule} from '@angular/fire/compat/auth-guard';
import {RegistrarComponent} from './pages/registrar/registrar.component';
import {ConcluirCadastroComponent} from './pages/concluir-cadastro/concluir-cadastro.component';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        BrowserModule,
        AngularFireAuthGuardModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent,
        EntrarComponent,
        HomeComponent,
        RegistrarComponent,
        ConcluirCadastroComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
