import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from "../../services/web-socket.service";
import { ChatService } from '../../services/chat.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mensajesSubscription: Subscription;
  texto: string;
  mensajes: any[] = [];
  elemento: HTMLElement;

  constructor(
    public chatServices: ChatService
  ) { }

  ngOnInit(): void {
    this.mensajesSubscription = this.chatServices.getMessage().subscribe(msg => {
      console.log(msg);
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mensajesSubscription.unsubscribe();
  }

  enviar(){
    if(this.texto.trim().length == 0){
      return;
    }

    this.chatServices.sendMessage(this.texto);
    this.texto = '';
  }

}
