import { Component, OnInit } from '@angular/core';
import { INSTAGRAM_URL, TELEGRAM_URL } from '../constant-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public INSTAGRAM_URL = INSTAGRAM_URL;
  public logoImg = 'assets/logo.png';
  public TELEGRAM_URL = TELEGRAM_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
