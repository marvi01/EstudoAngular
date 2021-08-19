import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembretesService } from 'src/app/services/lembretes.service';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';


@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  @ViewChild(ErroMsgComponent) errorMsgComponent: ErroMsgComponent;
  constructor(private lembreteService: LembretesService) {

   }

  ngOnInit(): void {
    this.getListaLembretes();
  }
  getListaLembretes(){
    this.lembreteService.getListaLembrete().subscribe((lembretes: Lembrete[])=>{
      this.lembretes = lembretes;
      console.log(this.lembretes);
    },()=>{this.errorMsgComponent.setErro('Falha ao buscar lembretes');console.log('Erro')});

  }
  
  deletaLembrete(id:number){
    this.lembreteService.deletaLembrete(id).subscribe(()=>{
      alert("Deletado Com sucesso");
      this.getListaLembretes()});
  }
  
  existemLembretes():boolean{
    return this.lembretes && this.lembretes.length>0;
  }
}
