import { Component, OnInit, ViewChild } from '@angular/core';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EstudoAngular';
  
  ngOnInit():void{
     
  }
}
