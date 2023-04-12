import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDateComponent } from './comp-date.component';

describe('CompDateComponent', () => {
  let component: CompDateComponent;
  let fixture: ComponentFixture<CompDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
