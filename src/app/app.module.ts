import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GojsAngularModule } from "gojs-angular";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';




const config: SocketIoConfig = {
  url: 'http://localhost:3000/',
  //url: 'https://primerparcialapi.herokuapp.com',
  options: {
    transports: ['websocket', 'polling']
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    GojsAngularModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right', timeOut: 1000 }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
