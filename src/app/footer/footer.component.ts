import { Component, OnInit } from '@angular/core';
import { HELP_WHATSAPP, INSTAGRAM_URL, TELEGRAM_URL } from '../constant-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public INSTAGRAM_URL = INSTAGRAM_URL;
  public whatsappUrl = `https://api.whatsapp.com/send?phone=+91${HELP_WHATSAPP}&text=Hello\n I need Help`;
  public TELEGRAM_URL = TELEGRAM_URL;
  public logoImg = 'assets/logo.png';
  public footerYear = (new Date()).getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
