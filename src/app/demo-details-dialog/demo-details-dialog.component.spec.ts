import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailsDialogComponent } from './demo-details-dialog.component';

describe('DemoDetailsDialogComponent', () => {
  let component: DemoDetailsDialogComponent;
  let fixture: ComponentFixture<DemoDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
