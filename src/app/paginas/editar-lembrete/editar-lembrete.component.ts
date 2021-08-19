import { Component,ViewChild  } from '@angular/core';
import { LembretesService } from 'src/app/services/lembretes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';
@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent  {
public lembrete :Lembrete;
  constructor(
    private lembreteService: LembretesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getLembrete(this.activateRoute.snapshot.params.id);
   }

  getLembrete(id:number){
    this.lembreteService.getLembrete(id)
    .subscribe((lembrete:Lembrete)=>{
      this.lembrete=lembrete;
      console.log(this.lembrete)
    })
  }

  atualizaLembrete(lembrete:Lembrete){
    this.lembreteService.atualizaLembrete(lembrete)
    .subscribe(()=>{
      this.router.navigateByUrl('/');
    })
  }

}
