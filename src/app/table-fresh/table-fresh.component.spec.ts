import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFreshComponent } from './table-fresh.component';

describe('TableFreshComponent', () => {
  let component: TableFreshComponent;
  let fixture: ComponentFixture<TableFreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
