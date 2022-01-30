import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidContentOneComponent } from './mid-content-one.component';

describe('MidContentOneComponent', () => {
  let component: MidContentOneComponent;
  let fixture: ComponentFixture<MidContentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidContentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidContentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
