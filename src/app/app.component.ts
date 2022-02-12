import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { demoAccountData } from './constant-data';
import { TelegramDialogComponent } from './telegram-dialog/telegram-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  constructor(public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    const dialogRef = this.dialog.open(TelegramDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
