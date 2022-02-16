import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, Image } from 'angular-responsive-carousel';
import { ID_WHATSAPP, TELEGRAM_URL } from '../constant-data';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  
  public whatsappUrl = `https://api.whatsapp.com/send?phone=+91${ID_WHATSAPP}&text=Hello\n I want Online ID`;
  public TELEGRAM_URL = TELEGRAM_URL;

  public images: Image[] = [
    {path: 'assets/40 poster.jpg'},
    {path: 'assets/Football copy.jpg'},
    {path: 'assets/good in pridection.jpg'},
    {path: 'assets/poster gb.jpg'},
    {path: 'assets/TENNIS copy.jpg'},
  ];

  public verifyImg = 'assets/verify-icon.png';

  public autoplay = false;
  private autoplayInterval = 200;
  @ViewChild(CarouselComponent, { static: true }) carosal: CarouselComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const intervalID = setInterval(() => {
      this.carosal?.next();
    }, this.autoplayInterval);

    setTimeout(() => { clearInterval(intervalID); this.autoplay = true;}, (this.autoplayInterval * this.images.length) * 2);
  }
}
