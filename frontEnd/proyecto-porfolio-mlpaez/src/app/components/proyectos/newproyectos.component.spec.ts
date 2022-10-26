import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproyectosComponent } from './newproyectos.component';

describe('NewproyectosComponent', () => {
  let component: NewproyectosComponent;
  let fixture: ComponentFixture<NewproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
