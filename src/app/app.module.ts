import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { LembretesService } from './services/lembretes.service';
import { FormLembreteComponent } from './compartilhado/form-lembrete/form-lembrete.component';
import { RoutingModule } from './app.router';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ErroMsgComponent,
    ListaLembreteComponent,
    FormLembreteComponent,
    CriarLembreteComponent,
    EditarLembreteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    RoutingModule
  ],
  providers: [ HttpClientModule,LembretesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
