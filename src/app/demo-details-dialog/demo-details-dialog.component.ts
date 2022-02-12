import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-details-dialog',
  templateUrl: './demo-details-dialog.component.html',
  styleUrls: ['./demo-details-dialog.component.scss']
})
export class DemoDetailsDialogComponent implements OnInit {
  public demoDetails: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.demoDetails = this.data.demoDetails;
  }

  public goToLink(url: string): void {
    window.open(url, "_blank");
  }
}
