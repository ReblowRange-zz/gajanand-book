import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkWordsComponent } from './mark-words.component';

describe('MarkWordsComponent', () => {
  let component: MarkWordsComponent;
  let fixture: ComponentFixture<MarkWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
