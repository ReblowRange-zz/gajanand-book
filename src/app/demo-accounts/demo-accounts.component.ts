import { Component, OnInit } from '@angular/core';
import { demoAccountData } from '../constant-data';

@Component({
  selector: 'app-demo-accounts',
  templateUrl: './demo-accounts.component.html',
  styleUrls: ['./demo-accounts.component.scss']
})
export class DemoAccountsComponent implements OnInit {

  public demoAccountData = demoAccountData;
  constructor() { }

  ngOnInit(): void {
  }

}
