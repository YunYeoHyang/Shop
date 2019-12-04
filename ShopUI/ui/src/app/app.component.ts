import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PreloaderService} from "./core/services/preloader.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'JeungNyeongJae';
  constructor(private preloader: PreloaderService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.preloader.hide();
  }

  login() {
  }
}
