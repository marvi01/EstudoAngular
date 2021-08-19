import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';  
import { LembretesService } from 'src/app/services/lembretes.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent  {
@ViewChild(ErroMsgComponent) errorMsgComponent: ErroMsgComponent;
  constructor(
    private lembreteService: LembretesService,
    private router:Router
  ) { 
    
  }

  addLembrete(lembrete : Lembrete ){
    console.log(lembrete)
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      ()=>{ this.router.navigateByUrl('/');},
      ()=>{this.errorMsgComponent.setErro('falha ao adicionar lembrete')}
    )
  }

}
