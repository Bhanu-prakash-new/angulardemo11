import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtableComponent } from './newtable.component';

describe('NewtableComponent', () => {
  let component: NewtableComponent;
  let fixture: ComponentFixture<NewtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
