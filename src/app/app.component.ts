import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { demoAccountData } from './constant-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  constructor(public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    // const dialogRef = this.dialog.open(TelegramDialogComponent);
  }
}
