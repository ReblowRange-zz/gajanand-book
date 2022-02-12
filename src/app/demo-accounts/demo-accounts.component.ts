import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { demoAccountData } from '../constant-data';
import { DemoDetailsDialogComponent } from '../demo-details-dialog/demo-details-dialog.component';

@Component({
  selector: 'app-demo-accounts',
  templateUrl: './demo-accounts.component.html',
  styleUrls: ['./demo-accounts.component.scss']
})
export class DemoAccountsComponent implements OnInit {

  public demoAccountData = demoAccountData;
  public selectedDemoItem: any;
  public openDemoDetails = false;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onDemoClick(item: any): void {
    console.log(item);
    this.selectedDemoItem = item;
    this.openDialog(item);
  }

  public openDialog(item: any): void {
    const dialogRef = this.dialog.open(DemoDetailsDialogComponent,{
      data: {
        demoDetails: item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
