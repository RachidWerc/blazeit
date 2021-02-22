import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMOComponent } from './dev-mo.component';

describe('DevMOComponent', () => {
  let component: DevMOComponent;
  let fixture: ComponentFixture<DevMOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevMOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
