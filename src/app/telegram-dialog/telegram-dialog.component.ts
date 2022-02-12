import { Component, OnInit } from '@angular/core';

import { TELEGRAM_URL } from '../constant-data';

@Component({
  selector: 'app-telegram-dialog',
  templateUrl: './telegram-dialog.component.html',
  styleUrls: ['./telegram-dialog.component.scss']
})
export class TelegramDialogComponent implements OnInit {
  public teleBGImg = 'assets/Telegram-Pixabay-Photo.jpg';
  public teleUrl = TELEGRAM_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
