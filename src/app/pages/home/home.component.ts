import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  joinRoom(){
    this.toast.success('Ingresaste a la sala!');
  }

}
