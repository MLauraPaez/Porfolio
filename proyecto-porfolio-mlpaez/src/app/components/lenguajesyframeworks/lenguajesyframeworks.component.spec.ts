import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesyframeworksComponent } from './lenguajesyframeworks.component';

describe('LenguajesyframeworksComponent', () => {
  let component: LenguajesyframeworksComponent;
  let fixture: ComponentFixture<LenguajesyframeworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajesyframeworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajesyframeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
