import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensComponent } from './pens.component';

describe('PensComponent', () => {
  let component: PensComponent;
  let fixture: ComponentFixture<PensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensComponent]
    });
    fixture = TestBed.createComponent(PensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
