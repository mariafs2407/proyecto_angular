import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImagenComponent } from './main-imagen.component';

describe('MainImagenComponent', () => {
  let component: MainImagenComponent;
  let fixture: ComponentFixture<MainImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
