import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacamosComponent } from './destacamos.component';

describe('DestacamosComponent', () => {
  let component: DestacamosComponent;
  let fixture: ComponentFixture<DestacamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestacamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
