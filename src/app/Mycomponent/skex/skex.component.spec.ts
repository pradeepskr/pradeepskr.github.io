import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkexComponent } from './skex.component';

describe('SkexComponent', () => {
  let component: SkexComponent;
  let fixture: ComponentFixture<SkexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
