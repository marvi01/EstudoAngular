import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent  {
    public error: string;
  
  
    setErro(erro:string|undefined, tempo: number=5000){
      this.error = erro;
      console.log(erro);
      setTimeout(() => {
        this.error = null;
        
    },tempo);
  }



}
