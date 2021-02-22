import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMIComponent } from './dev-mi.component';

describe('DevMIComponent', () => {
  let component: DevMIComponent;
  let fixture: ComponentFixture<DevMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevMIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
